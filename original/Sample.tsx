import {importC, importA, importB} from "./importStuff"; // Imports will be alphabetized and placed on separate lines

const Sample = () => {
    return (<div> {/*There should be a newline between the opening and closing parenthesis in multiline return statements*/}
        <p id='needDoubleQuotes'>Newline needed!</p> {/*jsx attributes need to use double quotes (if possible)*/}
    </div>);
};

export default Sample;; // There should only be one semi-colon at the end of statements