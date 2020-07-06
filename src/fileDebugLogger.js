import path from "path";

/**
 * Takes in a file, in string format, figures out which type of file it is,
 * converts the file into a part, and returns the part
 *
 * @param {String} file  the string representation of the passed file
 */
async function fileToParts (
    file,
    options = { fileName: "", colors: [], backbone: "" }
) {
    const { fileName = "", colors = [], backbone = "" } = options;

    if (!file) {
        throw Error("cannot parse null or empty string");
    }

    // this is a check for an edge case, where the user uploads come kind
    // of file that's full of bps but doesn't fit into a defined type
    const firstLine = file.search ? file.substring(0, file.search("\n")) : "";
    const dnaCharLength = firstLine.replace(/[^atcgATCG]/, "").length;
    const dnaOnlyFile = dnaCharLength / firstLine.length > 0.8; // is it >80% dna?
    const sourceName = fileName.split(path.sep).pop();
    const name =
        fileName && sourceName
            ? sourceName.substring(0, sourceName.search("\\."))
            : "Untitled";
    const source = { name: sourceName, file: file };

    // another edge case check for whether the part is a JSON part from Benchling
    // just a heuristic that says 1) yes it can be parsed 2) it conaints a list of
    // fields that are common to Benchling files
    let isBenchling = false;
    try {
        const benchlingJSON = JSON.parse(file); // will err out if not JSON
        const benchlingJSONKeys = Object.keys(benchlingJSON);
        if (
            ["bases", "annotations", "primers"].every(k =>
                benchlingJSONKeys.includes(k)
            )
        ) {
            isBenchling = true;
        }
    } catch (_) {}

    let parts;

    try {
        switch (true) {
            // SnapGene; first because it's a buffer, not string
            // it will fail for some string methods below
            case fileName.endsWith(".dna"):
                parts = true;
                console.log("parsing as SpanGene .dna file");
                break;

            // FASTA
            case file.startsWith(">"):
            case file.startsWith(";"):
            case fileName.endsWith(".seq"):
            case fileName.endsWith(".fa"):
            case fileName.endsWith(".fas"):
            case fileName.endsWith(".fasta"):
                parts = true;
                console.log("parsing as FASTA");
                break;

            // Genbank
            case file.includes("LOCUS") && file.includes("ORIGIN"):
            case fileName.endsWith(".gb"):
            case fileName.endsWith(".gbk"):
            case fileName.endsWith(".genbank"):
            case fileName.endsWith(".ape"):
                parts = true;
                console.log("parsing as GeneBank");
                break;

            // SeqBuilder
            case file.includes("Written by SeqBuilder"):
            case fileName.endsWith(".sbd"):
                parts = true;
                console.log("parsing as SeqBuilder .sbd");
                break;

            // BioBrick XML
            case file.includes("Parts from the iGEM"):
            case file.includes("<part_list>"):
                parts = true;
                console.log("parsing as part from iGEM BioBrick XML");
                break;

            // Benchling JSON
            case isBenchling:
                parts = true;
                console.log("parsing as Benchling JSON");
                break;

            // SBOL
            case file.includes("RDF"):
                parts = true;
                console.log("parsing as SBOL RDF");
                break;

            // jbei
            case file.includes(':seq="http://jbei.org/sequence"'):
            case file.startsWith("<seq:seq"):
                parts = true;
                console.log("parsing as jbei");
                break;

            // a DNA text file without an official formatting
            case dnaOnlyFile:
                parts = true;
                console.log("parsing as DNA text no offical formating");
                break;

            default:
                throw Error(`${fileName} File type not recognized: ${file}`);
        }
    } catch (e) {
        console.error(e);
        return null;
    }

    // add the source information to all parts
    if (parts) {
        return console.log("File parsed")
    } else {
        throw Error("unparsable file");
    }
};
/**
 * filesToParts can convert either string contents of
 * DNA files or a list of File objects into SeqViz parts
 */
 export default async function fileDebugLogger (files, option)  {
    try {
        const partLists = await new Promise((resolve, reject) => {
            const options = { fileName: "", colors: [], backbone: "" };
            const { fileName = "", colors = [], backbone = "" } = options;

            // if it's just a single file string
            if (typeof files === "string") {
                resolve(fileToParts(files, { fileName, colors, backbone }));
                return;
            }

            // if it's not an iterator over files, throw
            if (!Array.isArray(files)) {
                files = [files];
            }

            // a list of file strings or a FileList
            let partsList = [];
            files.forEach(file => {
                if (file.type === "application/zip") {
                    reject(new Error("zip files are not supported by SeqViz"));
                } else if (typeof file === "string") {
                    partsList.push(fileToParts(file, options));
                } else {
                    partsList.push(
                        new Promise(resolve => {
                            const reader = new FileReader();
                            reader.onload = e => {
                                resolve(fileToParts(e.target.result, fileOptions));
                            };

                            // set fileName in options if available
                            // fileName used in naming part and determining which file parser to use
                            const fileOptions = file.name
                                ? { ...options, fileName: file.name }
                                : options;

                            // SnapGene files are buffers, rest are strings
                            if (fileOptions.fileName.endsWith(".dna")) {
                                reader.readAsArrayBuffer(file);
                            } else {
                                reader.readAsText(file);
                            }
                        })
                    );
                }
            });

            resolve(Promise.all(partsList));
        }).then(() => {return "Done";});


    } catch (err) {
        throw err;
    }
    return "test"
};


