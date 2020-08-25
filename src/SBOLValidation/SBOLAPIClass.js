import React, {useState, useEffect} from 'react'
import Dropzone from 'react-dropzone'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {makeStyles} from '@material-ui/core/styles';
import {Redirect, useLocation} from "react-router-dom";
import { SeqViz } from "seqviz";
import  fileDebugLogger from "src/fileDebugLogger.js";
import axios from "axios"
import {RiseLoader} from "react-spinners";
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default function FileUpload(props) {
    const [files, setFiles] = useState([]);
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({})
    const [done, setDone] = useState(false)
    let currentLocation = useLocation();
    const [FileString,  setFileString]  = useState("")
    function acceptFiles(acceptedFiles) {
        setFiles(acceptedFiles);
        /************************************************************************************************************************/
        function updateString(acceptedFilesPls,  FileString) {
            const reader = new FileReader()
           /* constructor(){
                super(); //start of all constructor in JS classes
                this.state = { //private
                    value:null,
                };
            }*/

            reader.readAsText(acceptedFilesPls);
            reader.onload = () => {
                let abba = JSON.stringify(reader.result) ;
                setFileString(abba);
                console.log("abba = " ,abba);

                console.log("FileString", FileString);

                // FileString.setState(stringOutput);
             //    FileString.outString = reader.result;
            }
            return (
                 FileString
            );

        }


        /************************************************************************************************************************/

        (async () => {
            try {
               let formData = new FormData() ; //
               formData.append('file',  acceptedFiles[0]);
                await fileDebugLogger(acceptedFiles[0]);
                // Assuming ktor backend is running on localhost:8080
                setDone(true);
                console.log("we're in async!!");




    


             /*  acceptedFiles.forEach((file) => {
                    const reader = new FileReader()
                    reader.onabort = () => console.log('file reading was aborted')
                    reader.onerror = () => console.log('file reading has failed')
                    reader.onload = () => {
                    console.log('file reading was successful')
                        // Do whatever you want with the file contents
                        outString = reader.result;
                       // console.log("outString",outString);
                        acceptedFiles = outString;
                        console.log("file",file);

                        //     console.log("=> business",string);
                     //   console.log(string);
                     //   console.log("string= ",stringFile);
                     //   console.log("string inside = ",stringFile);
                     //   console.log("file inside = ",stringFile);

                    }
                   reader.readAsText(file);
                });//close acceptedFiles.forEach((file) */
                //      console.log("outString",outString);
                 await updateString(acceptedFiles[0], FileString);
                await console.log("typeof( FileString)",typeof( FileString));
                console.log(" FileString", FileString);
                console.log(" FileString.state", FileString.state);


                let response = await axios({
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    data: {
                        'options': {
                            'language': 'SBOL2',
                            'test_equality': false,
                            'check_uri_compliance': true,
                            'check_completeness': true,
                            'check_best_practices': false,
                            'fail_on_first_error': true,
                            'provide_detailed_stack_trace': false,
                            //   'subset_uri': '',
                            //       'uri_prefix': '',
                            // 'version': '',
                            'insert_type': false,
                            'main_file_name': 'main file',
                        },
                        'return_file': true,
                        'main_file': '<?xml version="1.0" ?>\n' +
                            '<rdf:RDF xmlns:pr="http://partsregistry.org" xmlns:myersLab="http://www.async.ece.utah.edu" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sbol="http://sbols.org/v2#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:prov="http://www.w3.org/ns/prov#">\n' +
                            '  <sbol:ModuleDefinition rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit"/>\n' +
                            '    <sbol:displayId>CRPb_characterization_Circuit</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_gRNA_b/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_gRNA_b"/>\n' +
                            '        <sbol:displayId>cas9m_BFP_gRNA_b</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP_gRNA_b/1.0"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#private"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#none"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP"/>\n' +
                            '        <sbol:displayId>EYFP</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/EYFP/1.0"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#private"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#none"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_gene/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_gene"/>\n' +
                            '        <sbol:displayId>cas9m_BFP_gene</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP_gene/1.0"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#private"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#none"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate"/>\n' +
                            '        <sbol:displayId>mKate</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/mKate/1.0"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#private"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#none"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16"/>\n' +
                            '        <sbol:displayId>Gal4VP16</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/Gal4VP16/1.0"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#private"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#none"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_gene/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_gene"/>\n' +
                            '        <sbol:displayId>EYFP_gene</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/EYFP_gene/1.0"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#private"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#none"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP"/>\n' +
                            '        <sbol:displayId>cas9m_BFP</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP/1.0"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#private"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#none"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_gene/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_gene"/>\n' +
                            '        <sbol:displayId>gRNA_b_gene</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_gene/1.0"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#private"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#none"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_gene/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_gene"/>\n' +
                            '        <sbol:displayId>mKate_gene</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/mKate_gene/1.0"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#private"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#none"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b"/>\n' +
                            '        <sbol:displayId>gRNA_b</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b/1.0"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#private"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#none"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_gene/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_gene"/>\n' +
                            '        <sbol:displayId>Gal4VP16_gene</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/Gal4VP16_gene/1.0"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#private"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#none"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_deg/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_deg"/>\n' +
                            '        <sbol:displayId>Gal4VP16_deg</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000179"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_deg/Gal4VP16/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_deg/Gal4VP16"/>\n' +
                            '            <sbol:displayId>Gal4VP16</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000010"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_Activation/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_Activation"/>\n' +
                            '        <sbol:displayId>EYFP_Activation</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000170"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_Activation/EYFP_gene/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_Activation/EYFP_gene"/>\n' +
                            '            <sbol:displayId>EYFP_gene</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000598"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_gene/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_Activation/Gal4VP16/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_Activation/Gal4VP16"/>\n' +
                            '            <sbol:displayId>Gal4VP16</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000459"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_deg/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_deg"/>\n' +
                            '        <sbol:displayId>gRNA_b_deg</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000179"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_deg/gRNA_b/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_deg/gRNA_b"/>\n' +
                            '            <sbol:displayId>gRNA_b</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000010"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_production/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_production"/>\n' +
                            '        <sbol:displayId>mKate_production</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000589"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_production/mKate_gene/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_production/mKate_gene"/>\n' +
                            '            <sbol:displayId>mKate_gene</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000598"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_gene/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_production/mKate/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_production/mKate"/>\n' +
                            '            <sbol:displayId>mKate</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000011"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_deg/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_deg"/>\n' +
                            '        <sbol:displayId>cas9m_BFP_deg</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000179"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_deg/cas9m_BFP/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_deg/cas9m_BFP"/>\n' +
                            '            <sbol:displayId>cas9m_BFP</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000010"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_production/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_production"/>\n' +
                            '        <sbol:displayId>cas9m_BFP_production</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000589"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_production/cas9m_BFP_gene/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_production/cas9m_BFP_gene"/>\n' +
                            '            <sbol:displayId>cas9m_BFP_gene</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000598"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_gene/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_production/cas9m_BFP/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_production/cas9m_BFP"/>\n' +
                            '            <sbol:displayId>cas9m_BFP</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000011"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_production/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_production"/>\n' +
                            '        <sbol:displayId>gRNA_b_production</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000589"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_production/gRNA_b_gene/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_production/gRNA_b_gene"/>\n' +
                            '            <sbol:displayId>gRNA_b_gene</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000598"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_gene/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_production/gRNA_b/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b_production/gRNA_b"/>\n' +
                            '            <sbol:displayId>gRNA_b</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000011"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_gRNA_b_deg/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_gRNA_b_deg"/>\n' +
                            '        <sbol:displayId>cas9m_BFP_gRNA_b_deg</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000179"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_gRNA_b_deg/cas9m_BFP_gRNA_b/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_gRNA_b_deg/cas9m_BFP_gRNA_b"/>\n' +
                            '            <sbol:displayId>cas9m_BFP_gRNA_b</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000010"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_gRNA_b/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_deg/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_deg"/>\n' +
                            '        <sbol:displayId>mKate_deg</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000179"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_deg/mKate/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate_deg/mKate"/>\n' +
                            '            <sbol:displayId>mKate</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000010"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/mKate/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_deg/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_deg"/>\n' +
                            '        <sbol:displayId>EYFP_deg</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000179"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_deg/EYFP/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_deg/EYFP"/>\n' +
                            '            <sbol:displayId>EYFP</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000010"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_production/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_production"/>\n' +
                            '        <sbol:displayId>Gal4VP16_production</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000589"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_production/Gal4VP16_gene/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_production/Gal4VP16_gene"/>\n' +
                            '            <sbol:displayId>Gal4VP16_gene</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000598"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_gene/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_production/Gal4VP16/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16_production/Gal4VP16"/>\n' +
                            '            <sbol:displayId>Gal4VP16</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000011"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/Gal4VP16/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:module>\n' +
                            '      <sbol:Module rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template"/>\n' +
                            '        <sbol:displayId>CRISPR_Template</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/1.0"/>\n' +
                            '        <sbol:mapsTo>\n' +
                            '          <sbol:MapsTo rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template/cas9m_BFP_map/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template/cas9m_BFP_map"/>\n' +
                            '            <sbol:displayId>cas9m_BFP_map</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:refinement rdf:resource="http://sbols.org/v2#useLocal"/>\n' +
                            '            <sbol:remote rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_generic/1.0"/>\n' +
                            '            <sbol:local rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP/1.0"/>\n' +
                            '          </sbol:MapsTo>\n' +
                            '        </sbol:mapsTo>\n' +
                            '        <sbol:mapsTo>\n' +
                            '          <sbol:MapsTo rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template/gRNA_b_map/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template/gRNA_b_map"/>\n' +
                            '            <sbol:displayId>gRNA_b_map</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:refinement rdf:resource="http://sbols.org/v2#useLocal"/>\n' +
                            '            <sbol:remote rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/gRNA_generic/1.0"/>\n' +
                            '            <sbol:local rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/gRNA_b/1.0"/>\n' +
                            '          </sbol:MapsTo>\n' +
                            '        </sbol:mapsTo>\n' +
                            '        <sbol:mapsTo>\n' +
                            '          <sbol:MapsTo rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template/EYFP_gene_map/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template/EYFP_gene_map"/>\n' +
                            '            <sbol:displayId>EYFP_gene_map</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:refinement rdf:resource="http://sbols.org/v2#useLocal"/>\n' +
                            '            <sbol:remote rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target_gene/1.0"/>\n' +
                            '            <sbol:local rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP_gene/1.0"/>\n' +
                            '          </sbol:MapsTo>\n' +
                            '        </sbol:mapsTo>\n' +
                            '        <sbol:mapsTo>\n' +
                            '          <sbol:MapsTo rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template/cas9m_BFP_gRNA_map/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template/cas9m_BFP_gRNA_map"/>\n' +
                            '            <sbol:displayId>cas9m_BFP_gRNA_map</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:refinement rdf:resource="http://sbols.org/v2#useLocal"/>\n' +
                            '            <sbol:remote rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_gRNA_complex/1.0"/>\n' +
                            '            <sbol:local rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/cas9m_BFP_gRNA_b/1.0"/>\n' +
                            '          </sbol:MapsTo>\n' +
                            '        </sbol:mapsTo>\n' +
                            '        <sbol:mapsTo>\n' +
                            '          <sbol:MapsTo rdf:about="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template/EYFP_map/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/CRISPR_Template/EYFP_map"/>\n' +
                            '            <sbol:displayId>EYFP_map</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:refinement rdf:resource="http://sbols.org/v2#useLocal"/>\n' +
                            '            <sbol:remote rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target/1.0"/>\n' +
                            '            <sbol:local rdf:resource="http://sbols.org/CRISPR_Example/CRPb_characterization_Circuit/EYFP/1.0"/>\n' +
                            '          </sbol:MapsTo>\n' +
                            '        </sbol:mapsTo>\n' +
                            '      </sbol:Module>\n' +
                            '    </sbol:module>\n' +
                            '  </sbol:ModuleDefinition>\n' +
                            '  <sbol:ModuleDefinition rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template"/>\n' +
                            '    <sbol:displayId>CRISPR_Template</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <dcterms:title>CRISPR-based Repression Template</dcterms:title>\n' +
                            '    <dcterms:description>Authors: S. Kiani, J. Beal, M. Ebrahimkhani, J. Huh, R. Hall, Z. Xie, Y. Li, and R. WeissTitel: Crispr transcriptional repression devices and layered circuits in mammalian cellsJournal: Nature Methods, vol. 11, no. 7, pp. 723–726, 2014.</dcterms:description>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_gRNA_complex/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_gRNA_complex"/>\n' +
                            '        <sbol:displayId>cas9_gRNA_complex</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/cas9_gRNA_complex"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/gRNA_generic/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/gRNA_generic"/>\n' +
                            '        <sbol:displayId>gRNA_generic</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/gRNA_generic"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/target/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target"/>\n' +
                            '        <sbol:displayId>target</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/target"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_generic/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_generic"/>\n' +
                            '        <sbol:displayId>cas9_generic</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/cas9_generic"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:functionalComponent>\n' +
                            '      <sbol:FunctionalComponent rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/target_gene/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target_gene"/>\n' +
                            '        <sbol:displayId>target_gene</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/target_gene"/>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>\n' +
                            '      </sbol:FunctionalComponent>\n' +
                            '    </sbol:functionalComponent>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/target_gene_inhibition/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target_gene_inhibition"/>\n' +
                            '        <sbol:displayId>target_gene_inhibition</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000169"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/target_gene_inhibition/cas9_gRNA_complex/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target_gene_inhibition/cas9_gRNA_complex"/>\n' +
                            '            <sbol:displayId>cas9_gRNA_complex</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000020"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_gRNA_complex/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/target_gene_inhibition/target_gene/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target_gene_inhibition/target_gene"/>\n' +
                            '            <sbol:displayId>target_gene</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000598"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target_gene/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_complex_formation/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_complex_formation"/>\n' +
                            '        <sbol:displayId>cas9_complex_formation</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000177"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_complex_formation/cas9_gRNA_complex/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_complex_formation/cas9_gRNA_complex"/>\n' +
                            '            <sbol:displayId>cas9_gRNA_complex</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000011"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_gRNA_complex/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_complex_formation/cas9_generic/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_complex_formation/cas9_generic"/>\n' +
                            '            <sbol:displayId>cas9_generic</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000010"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_generic/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_complex_formation/gRNA_generic/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/cas9_complex_formation/gRNA_generic"/>\n' +
                            '            <sbol:displayId>gRNA_generic</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000010"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/gRNA_generic/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '    <sbol:interaction>\n' +
                            '      <sbol:Interaction rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/target_production/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target_production"/>\n' +
                            '        <sbol:displayId>target_production</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000589"/>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/target_production/target/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target_production/target"/>\n' +
                            '            <sbol:displayId>target</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000011"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '        <sbol:participation>\n' +
                            '          <sbol:Participation rdf:about="http://sbols.org/CRISPR_Example/CRISPR_Template/target_production/target_gene/1.0">\n' +
                            '            <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target_production/target_gene"/>\n' +
                            '            <sbol:displayId>target_gene</sbol:displayId>\n' +
                            '            <sbol:version>1.0</sbol:version>\n' +
                            '            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000598"/>\n' +
                            '            <sbol:participant rdf:resource="http://sbols.org/CRISPR_Example/CRISPR_Template/target_gene/1.0"/>\n' +
                            '          </sbol:Participation>\n' +
                            '        </sbol:participation>\n' +
                            '      </sbol:Interaction>\n' +
                            '    </sbol:interaction>\n' +
                            '  </sbol:ModuleDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/cas9m_BFP_gRNA_b/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP_gRNA_b"/>\n' +
                            '    <sbol:displayId>cas9m_BFP_gRNA_b</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Complex"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/cas9m_BFP/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP"/>\n' +
                            '    <sbol:displayId>cas9m_BFP</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Protein"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/pConst_alt">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/pConst_alt"/>\n' +
                            '    <sbol:displayId>pConst_alt</sbol:displayId>\n' +
                            '    <prov:wasDerivedFrom rdf:resource="http://sbols.org/CRISPR_Example/pConst/1.0"/>\n' +
                            '    <pr:experience rdf:resource="http://parts.igem.org/Part:BBa_J23119:Experience"/>\n' +
                            '    <myersLab:datasheet rdf:resource="http://sbols.org/CRISPR_Example/datasheet/1.1"/>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>\n' +
                            '    <sbol:sequence rdf:resource="http://sbols.org/CRISPR_Example/pConst_alt_seq/1.0"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/pConst/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/pConst"/>\n' +
                            '    <sbol:displayId>pConst</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <pr:experience rdf:resource="http://parts.igem.org/Part:BBa_J23119:Experience"/>\n' +
                            '    <myersLab:datasheet rdf:resource="http://sbols.org/CRISPR_Example/datasheet/1.1"/>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/Gal4VP16_gene/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/Gal4VP16_gene"/>\n' +
                            '    <sbol:displayId>Gal4VP16_gene</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>\n' +
                            '    <sbol:component>\n' +
                            '      <sbol:Component rdf:about="http://sbols.org/CRISPR_Example/Gal4VP16_gene/Gal4VP16_cds/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/Gal4VP16_gene/Gal4VP16_cds"/>\n' +
                            '        <sbol:displayId>Gal4VP16_cds</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/Gal4VP16_cds"/>\n' +
                            '      </sbol:Component>\n' +
                            '    </sbol:component>\n' +
                            '    <sbol:component>\n' +
                            '      <sbol:Component rdf:about="http://sbols.org/CRISPR_Example/Gal4VP16_gene/pConst/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/Gal4VP16_gene/pConst"/>\n' +
                            '        <sbol:displayId>pConst</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/pConst"/>\n' +
                            '      </sbol:Component>\n' +
                            '    </sbol:component>\n' +
                            '    <sbol:sequenceConstraint>\n' +
                            '      <sbol:SequenceConstraint rdf:about="http://sbols.org/CRISPR_Example/Gal4VP16_gene/GAL4VP16_gene_constraint/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/Gal4VP16_gene/GAL4VP16_gene_constraint"/>\n' +
                            '        <sbol:displayId>GAL4VP16_gene_constraint</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>\n' +
                            '        <sbol:subject rdf:resource="http://sbols.org/CRISPR_Example/Gal4VP16_gene/pConst/1.0"/>\n' +
                            '        <sbol:object rdf:resource="http://sbols.org/CRISPR_Example/Gal4VP16_gene/Gal4VP16_cds/1.0"/>\n' +
                            '      </sbol:SequenceConstraint>\n' +
                            '    </sbol:sequenceConstraint>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/target_gene/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/target_gene"/>\n' +
                            '    <sbol:displayId>target_gene</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/mKate/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/mKate"/>\n' +
                            '    <sbol:displayId>mKate</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Protein"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/gRNA_generic/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/gRNA_generic"/>\n' +
                            '    <sbol:displayId>gRNA_generic</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#RnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001998"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/Gal4VP16/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/Gal4VP16"/>\n' +
                            '    <sbol:displayId>Gal4VP16</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Protein"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/Gal4VP16_cds/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/Gal4VP16_cds"/>\n' +
                            '    <sbol:displayId>Gal4VP16_cds</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000316"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/EYFP_cds/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/EYFP_cds"/>\n' +
                            '    <sbol:displayId>EYFP_cds</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000316"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/CRP_b/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRP_b"/>\n' +
                            '    <sbol:displayId>CRP_b</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>\n' +
                            '    <sbol:sequence rdf:resource="http://sbols.org/CRISPR_Example/CRP_b_seq"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/mKate_cds/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/mKate_cds"/>\n' +
                            '    <sbol:displayId>mKate_cds</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000316"/>\n' +
                            '    <sbol:sequence rdf:resource="http://sbols.org/CRISPR_Example/mKate_seq"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/EYFP_gene/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/EYFP_gene"/>\n' +
                            '    <sbol:displayId>EYFP_gene</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>\n' +
                            '    <sbol:component>\n' +
                            '      <sbol:Component rdf:about="http://sbols.org/CRISPR_Example/EYFP_gene/CRP_b/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/EYFP_gene/CRP_b"/>\n' +
                            '        <sbol:displayId>CRP_b</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/CRP_b"/>\n' +
                            '      </sbol:Component>\n' +
                            '    </sbol:component>\n' +
                            '    <sbol:component>\n' +
                            '      <sbol:Component rdf:about="http://sbols.org/CRISPR_Example/EYFP_gene/EYFP_cds/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/EYFP_gene/EYFP_cds"/>\n' +
                            '        <sbol:displayId>EYFP_cds</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/EYFP_cds"/>\n' +
                            '      </sbol:Component>\n' +
                            '    </sbol:component>\n' +
                            '    <sbol:sequenceConstraint>\n' +
                            '      <sbol:SequenceConstraint rdf:about="http://sbols.org/CRISPR_Example/EYFP_gene/EYFP_gene_constraint/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/EYFP_gene/EYFP_gene_constraint"/>\n' +
                            '        <sbol:displayId>EYFP_gene_constraint</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>\n' +
                            '        <sbol:subject rdf:resource="http://sbols.org/CRISPR_Example/EYFP_gene/CRP_b/1.0"/>\n' +
                            '        <sbol:object rdf:resource="http://sbols.org/CRISPR_Example/EYFP_gene/EYFP_cds/1.0"/>\n' +
                            '      </sbol:SequenceConstraint>\n' +
                            '    </sbol:sequenceConstraint>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/target/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/target"/>\n' +
                            '    <sbol:displayId>target</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Protein"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/gRNA_b/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b"/>\n' +
                            '    <sbol:displayId>gRNA_b</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#RnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001998"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/mKate_gene/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/mKate_gene"/>\n' +
                            '    <sbol:displayId>mKate_gene</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>\n' +
                            '    <sbol:component>\n' +
                            '      <sbol:Component rdf:about="http://sbols.org/CRISPR_Example/mKate_gene/mKate_cds/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/mKate_gene/mKate_cds"/>\n' +
                            '        <sbol:displayId>mKate_cds</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/mKate_cds"/>\n' +
                            '      </sbol:Component>\n' +
                            '    </sbol:component>\n' +
                            '    <sbol:component>\n' +
                            '      <sbol:Component rdf:about="http://sbols.org/CRISPR_Example/mKate_gene/pConst/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/mKate_gene/pConst"/>\n' +
                            '        <sbol:displayId>pConst</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/pConst"/>\n' +
                            '      </sbol:Component>\n' +
                            '    </sbol:component>\n' +
                            '    <sbol:sequenceConstraint>\n' +
                            '      <sbol:SequenceConstraint rdf:about="http://sbols.org/CRISPR_Example/mKate_gene/mKate_gene_constraint/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/mKate_gene/mKate_gene_constraint"/>\n' +
                            '        <sbol:displayId>mKate_gene_constraint</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>\n' +
                            '        <sbol:subject rdf:resource="http://sbols.org/CRISPR_Example/mKate_gene/pConst/1.0"/>\n' +
                            '        <sbol:object rdf:resource="http://sbols.org/CRISPR_Example/mKate_gene/mKate_cds/1.0"/>\n' +
                            '      </sbol:SequenceConstraint>\n' +
                            '    </sbol:sequenceConstraint>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/cas9m_BFP_cds/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP_cds"/>\n' +
                            '    <sbol:displayId>cas9m_BFP_cds</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000316"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/CRa_U6/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRa_U6"/>\n' +
                            '    <sbol:displayId>CRa_U6</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>\n' +
                            '    <sbol:sequence rdf:resource="http://sbols.org/CRISPR_Example/CRa_U6_seq"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/gRNA_b_gene/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_gene"/>\n' +
                            '    <sbol:displayId>gRNA_b_gene</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>\n' +
                            '    <sbol:component>\n' +
                            '      <sbol:Component rdf:about="http://sbols.org/CRISPR_Example/gRNA_b_gene/CRa_U6/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_gene/CRa_U6"/>\n' +
                            '        <sbol:displayId>CRa_U6</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/CRa_U6"/>\n' +
                            '      </sbol:Component>\n' +
                            '    </sbol:component>\n' +
                            '    <sbol:component>\n' +
                            '      <sbol:Component rdf:about="http://sbols.org/CRISPR_Example/gRNA_b_gene/gRNA_b_terminator/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_gene/gRNA_b_terminator"/>\n' +
                            '        <sbol:displayId>gRNA_b_terminator</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_terminator"/>\n' +
                            '      </sbol:Component>\n' +
                            '    </sbol:component>\n' +
                            '    <sbol:component>\n' +
                            '      <sbol:Component rdf:about="http://sbols.org/CRISPR_Example/gRNA_b_gene/gRNA_b_nc/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_gene/gRNA_b_nc"/>\n' +
                            '        <sbol:displayId>gRNA_b_nc</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_nc"/>\n' +
                            '      </sbol:Component>\n' +
                            '    </sbol:component>\n' +
                            '    <sbol:sequenceConstraint>\n' +
                            '      <sbol:SequenceConstraint rdf:about="http://sbols.org/CRISPR_Example/gRNA_b_gene/gRNA_b_gene_constraint1/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_gene/gRNA_b_gene_constraint1"/>\n' +
                            '        <sbol:displayId>gRNA_b_gene_constraint1</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>\n' +
                            '        <sbol:subject rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_gene/CRa_U6/1.0"/>\n' +
                            '        <sbol:object rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_gene/gRNA_b_nc/1.0"/>\n' +
                            '      </sbol:SequenceConstraint>\n' +
                            '    </sbol:sequenceConstraint>\n' +
                            '    <sbol:sequenceConstraint>\n' +
                            '      <sbol:SequenceConstraint rdf:about="http://sbols.org/CRISPR_Example/gRNA_b_gene/gRNA_b_gene_constraint2/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_gene/gRNA_b_gene_constraint2"/>\n' +
                            '        <sbol:displayId>gRNA_b_gene_constraint2</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>\n' +
                            '        <sbol:subject rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_gene/gRNA_b_nc/1.0"/>\n' +
                            '        <sbol:object rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_gene/gRNA_b_terminator/1.0"/>\n' +
                            '      </sbol:SequenceConstraint>\n' +
                            '    </sbol:sequenceConstraint>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/cas9_generic/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/cas9_generic"/>\n' +
                            '    <sbol:displayId>cas9_generic</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Protein"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/cas9m_BFP_gene/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP_gene"/>\n' +
                            '    <sbol:displayId>cas9m_BFP_gene</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>\n' +
                            '    <sbol:component>\n' +
                            '      <sbol:Component rdf:about="http://sbols.org/CRISPR_Example/cas9m_BFP_gene/pConst/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP_gene/pConst"/>\n' +
                            '        <sbol:displayId>pConst</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/pConst"/>\n' +
                            '      </sbol:Component>\n' +
                            '    </sbol:component>\n' +
                            '    <sbol:component>\n' +
                            '      <sbol:Component rdf:about="http://sbols.org/CRISPR_Example/cas9m_BFP_gene/cas9m_BFP_cds/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP_gene/cas9m_BFP_cds"/>\n' +
                            '        <sbol:displayId>cas9m_BFP_cds</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:access rdf:resource="http://sbols.org/v2#public"/>\n' +
                            '        <sbol:definition rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP_cds"/>\n' +
                            '      </sbol:Component>\n' +
                            '    </sbol:component>\n' +
                            '    <sbol:sequenceConstraint>\n' +
                            '      <sbol:SequenceConstraint rdf:about="http://sbols.org/CRISPR_Example/cas9m_BFP_gene/cas9m_BFP_gene_constraint/1.0">\n' +
                            '        <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP_gene/cas9m_BFP_gene_constraint"/>\n' +
                            '        <sbol:displayId>cas9m_BFP_gene_constraint</sbol:displayId>\n' +
                            '        <sbol:version>1.0</sbol:version>\n' +
                            '        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>\n' +
                            '        <sbol:subject rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP_gene/pConst/1.0"/>\n' +
                            '        <sbol:object rdf:resource="http://sbols.org/CRISPR_Example/cas9m_BFP_gene/cas9m_BFP_cds/1.0"/>\n' +
                            '      </sbol:SequenceConstraint>\n' +
                            '    </sbol:sequenceConstraint>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/cas9_gRNA_complex/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/cas9_gRNA_complex"/>\n' +
                            '    <sbol:displayId>cas9_gRNA_complex</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Complex"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/gRNA_b_terminator/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_terminator"/>\n' +
                            '    <sbol:displayId>gRNA_b_terminator</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000141"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/EYFP/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/EYFP"/>\n' +
                            '    <sbol:displayId>EYFP</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Protein"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:ComponentDefinition rdf:about="http://sbols.org/CRISPR_Example/gRNA_b_nc/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_nc"/>\n' +
                            '    <sbol:displayId>gRNA_b_nc</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>\n' +
                            '    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000316"/>\n' +
                            '    <sbol:sequence rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_seq"/>\n' +
                            '  </sbol:ComponentDefinition>\n' +
                            '  <sbol:Sequence rdf:about="http://sbols.org/CRISPR_Example/CRa_U6_seq/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRa_U6_seq"/>\n' +
                            '    <sbol:displayId>CRa_U6_seq</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:elements>GGTTTACCGAGCTCTTATTGGTTTTCAAACTTCATTGACTGTGCCAAGGTCGGGCAGGAAGAGGGCCTATTTCCCATGATTCCTTCATATTTGCATATACGATACAAGGCTGTTAGAGAGATAATTAGAATTAATTTGACTGTAAACACAAAGATATTAGTACAAAATACGTGACGTAGAAAGTAATAATTTCTTGGGTAGTTTGCAGTTTTAAAATTATGTTTTAAAATGGACTATCATATGCTTACCGTAACTTGAAATATAGAACCGATCCTCCCATTGGTATATATTATAGAACCGATCCTCCCATTGGCTTGTGGAAAGGACGAAACACCGTACCTCATCAGGAACATGTGTTTAAGAGCTATGCTGGAAACAGCAGAAATAGCAAGTTTAAATAAGGCTAGTCCGTTATCAACTTGAAAAAGTGGCACCGAGTCGGTGCTTTTTTTGGTGCGTTTTTATGCTTGTAGTATTGTATAATGTTTTT</sbol:elements>\n' +
                            '    <sbol:encoding rdf:resource="http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html"/>\n' +
                            '  </sbol:Sequence>\n' +
                            '  <sbol:Sequence rdf:about="http://sbols.org/CRISPR_Example/pConst_alt_seq/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/pConst_alt_seq"/>\n' +
                            '    <sbol:displayId>pConst_alt_seq</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:elements>ttgacggctagctcagtcctaggtacagtgctagc</sbol:elements>\n' +
                            '    <sbol:encoding rdf:resource="http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html"/>\n' +
                            '  </sbol:Sequence>\n' +
                            '  <sbol:Sequence rdf:about="http://sbols.org/CRISPR_Example/CRP_b_seq/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/CRP_b_seq"/>\n' +
                            '    <sbol:displayId>CRP_b_seq</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:elements>GCTCCGAATTTCTCGACAGATCTCATGTGATTACGCCAAGCTACGGGCGGAGTACTGTCCTCCGAGCGGAGTACTGTCCTCCGAGCGGAGTACTGTCCTCCGAGCGGAGTACTGTCCTCCGAGCGGAGTTCTGTCCTCCGAGCGGAGACTCTAGATACCTCATCAGGAACATGTTGGAATTCTAGGCGTGTACGGTGGGAGGCCTATATAAGCAGAGCTCGTTTAGTGAACCGTCAGATCGCCTCGAGTACCTCATCAGGAACATGTTGGATCCAATTCGACC</sbol:elements>\n' +
                            '    <sbol:encoding rdf:resource="http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html"/>\n' +
                            '  </sbol:Sequence>\n' +
                            '  <sbol:Sequence rdf:about="http://sbols.org/CRISPR_Example/gRNA_b_seq/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/gRNA_b_seq"/>\n' +
                            '    <sbol:displayId>gRNA_b_seq</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:elements>AAGGTCGGGCAGGAAGAGGGCCTATTTCCCATGATTCCTTCATATTTGCATATACGATACAAGGCTGTTAGAGAGATAATTAGAATTAATTTGACTGTAAACACAAAGATATTAGTACAAAATACGTGACGTAGAAAGTAATAATTTCTTGGGTAGTTTGCAGTTTTAAAATTATGTTTTAAAATGGACTATCATATGCTTACCGTAACTTGAAAGTATTTCGATTTCTTGGCTTTATATATCTTGTGGAAAGGACGAAACACCGTACCTCATCAGGAACATGTGTTTAAGAGCTATGCTGGAAACAGCAGAAATAGCAAGTTTAAATAAGGCTAGTCCGTTATCAACTTGAAAAAGTGGCACCGAGTCGGTGCTTTTTTT</sbol:elements>\n' +
                            '    <sbol:encoding rdf:resource="http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html"/>\n' +
                            '  </sbol:Sequence>\n' +
                            '  <sbol:Sequence rdf:about="http://sbols.org/CRISPR_Example/mKate_seq/1.0">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/mKate_seq"/>\n' +
                            '    <sbol:displayId>mKate_seq</sbol:displayId>\n' +
                            '    <sbol:version>1.0</sbol:version>\n' +
                            '    <sbol:elements>TCTAAGGGCGAAGAGCTGATTAAGGAGAACATGCACATGAAGCTGTACATGGAGGGCACCGTGAACAACCACCACTTCAAGTGCACATCCGAGGGCGAAGGCAAGCCCTACGAGGGCACCCAGACCATGAGAATCAAGGTGGTCGAGGGCGGCCCTCTCCCCTTCGCCTTCGACATCCTGGCTACCAGCTTCATGTACGGCAGCAAAACCTTCATCAACCACACCCAGGGCATCCCCGACTTCTTTAAGCAGTCCTTCCCTGAGGTAAGTGGTCCTACCTCATCAGGAACATGTGTTTTAGAGCTAGAAATAGCAAGTTAAAATAAGGCTAGTCCGTTATCAACTTGAAAAAGTGGCACCGAGTCGGTGCTACTAACTCTCGAGTCTTCTTTTTTTTTTTCACAGGGCTTCACATGGGAGAGAGTCACCACATACGAAGACGGGGGCGTGCTGACCGCTACCCAGGACACCAGCCTCCAGGACGGCTGCCTCATCTACAACGTCAAGATCAGAGGGGTGAACTTCCCATCCAACGGCCCTGTGATGCAGAAGAAAACACTCGGCTGGGAGGCCTCCACCGAGATGCTGTACCCCGCTGACGGCGGCCTGGAAGGCAGAAGCGACATGGCCCTGAAGCTCGTGGGCGGGGGCCACCTGATCTGCAACTTGAAGACCACATACAGATCCAAGAAACCCGCTAAGAACCTCAAGATGCCCGGCGTCTACTATGTGGACAGAAGACTGGAAAGAATCAAGGAGGCCGACAAAGAGACCTACGTCGAGCAGCACGAGGTGGCTGTGGCCAGATACTGCG</sbol:elements>\n' +
                            '    <sbol:encoding rdf:resource="http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html"/>\n' +
                            '  </sbol:Sequence>\n' +
                            '  <myersLab:datasheet rdf:about="http://sbols.org/CRISPR_Example/datasheet/1.1">\n' +
                            '    <sbol:persistentIdentity rdf:resource="http://sbols.org/CRISPR_Example/datasheet"/>\n' +
                            '    <sbol:displayId>datasheet</sbol:displayId>\n' +
                            '    <sbol:version>1.1</sbol:version>\n' +
                            '    <dcterms:title>Datasheet for Custom Parameters</dcterms:title>\n' +
                            '    <myersLab:characterizationData rdf:resource="http://www.async.ece.utah.edu/measurement/BBa_J23119"/>\n' +
                            '    <myersLab:transcriptionRate>0.75</myersLab:transcriptionRate>\n' +
                            '  </myersLab:datasheet>\n' +
                            '</rdf:RDF>\n'
                    },




                    url: 'https://validator.sbolstandard.org/validate/',

            });

                console.log("Axios has run!!");

                console.log("response.status: ",response.status);

                console.log("response: ", response);
                console.log("response.headers: ", response.request);
                console.log("file: ", (acceptedFiles));
                console.log("acceptedFiles[0]: ", (acceptedFiles[0]));

                console.log("file type: ", (typeof(acceptedFiles)));
              //  document.write(JSON.parse(JSON.stringify(acceptedFiles[0])));
                console.log("filejson: ", JSON.parse(JSON.stringify(acceptedFiles[0],null, ' ')));

          } catch (exception){
                console.log(exception);
                console.log("exception");
            }

        })()

    } //accept file end

    useEffect(() => {
        console.log(files);
        console.log("useEffect");
    }, [files]);


    const classes = useStyles();

    //Custom function to intercept tab selection to allow for saving of data etc before changing tabs.
    let handleTabSelection = function (location, index) {
        console.log(`In FileUpload Component; Text: ${location.text}, Path: ${location.path}, Index: ${index}`)
        setNavigateTo({path: location.path, push: true, state: {referrer: currentLocation}})
        setNavigate(true)
    }

    // If we need to navigate render a Redirect object with push to save history
    if (navigate) {
        return (<Redirect
            to={{
                pathname: navigateTo.path,
                push: navigateTo.push,
                state: navigateTo.state
            }}
        />)
    }



    return (
        <div>
            {/* Include MenuDraw at top, ensuring props are passed through function for handleTabSelection*/}
            <div className={classes.root}>
                <Paper elevation={3} className={classes.dropZone}>
                    <Dropzone onDrop={acceptedFiles => acceptFiles(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                            <section className={classes.dropZoneInner}>
                                <div {...getRootProps()} >
                                    <input {...getInputProps()}  />
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </Paper>
                <List className={classes.list}>
                    {files.length > 0 && files.map((acceptedFile, index) => {
                        return [<ListItem key={index} className={classes.listItem}>
                            <Paper elevation={3} className={classes.listItemPaper}>
                                <a href={URL.createObjectURL(acceptedFile)}
                                   download={acceptedFile.name}>{acceptedFile.name}</a>
                            </Paper>
                        </ListItem>,
                            <ListItem key={10}>
                                <SeqViz
                                    style = {{height: '50vh', width:'100vw'}}
                                    file ={acceptedFile}
                                />
                                </ListItem>

                        ]})}
                </List>
                <RiseLoader
                    css={{alignSelf:'center'}}
                    size={150}
                    color={"#123abc"}
                />
            </div>
        </div>
    )
}













const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 100,
        justifyContent: 'center',
        margin: 20
    },
    dropZone: {
        display: 'flex',
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    listItemPaper: {
        display: 'flex',
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 0,
    },
    listItem: {
        padding: 0,
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,


    },
    dropZoneInner: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: "#fafafa",
        color: '#bdbdbd',
        outline: 'none',
        margin: 10
    }
}));
