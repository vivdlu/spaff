import React from 'react';
import ReactExport from 'react-export-excel';
import { Button } from 'reactstrap';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Download extends React.Component {
  render() {
    return (
      <ExcelFile element={<Button outline color="primary">Download</Button>}>
        <ExcelSheet data={this.props.exportedRatings} name="ExampleCodes">
            <ExcelColumn label="Time" value="time"/>
            <ExcelColumn label="1" value="1"/>
            <ExcelColumn label="2" value="2"/>
            <ExcelColumn label="3" value="3"/>
            <ExcelColumn label="4" value="4"/>
            <ExcelColumn label="5" value="5"/>
            <ExcelColumn label="6" value="6"/>
            <ExcelColumn label="7" value="7"/>
            <ExcelColumn label="8" value="8"/>
            <ExcelColumn label="9" value="9"/>
            <ExcelColumn label="10" value="10"/>
        </ExcelSheet>
      </ExcelFile>
    );
  }
}

export default Download;
