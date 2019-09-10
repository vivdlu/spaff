import React from 'react';
import ReactExport from 'react-export-excel';
import Button from '@material-ui/core/Button';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Download extends React.Component {

  render() {

    var filename = String("SPAFF_" + this.props.codedCouple + "_" + this.props.codedPartner.toUpperCase() + "_" + this.props.codedDiscussion + "__" + this.props.coderName);
    return (
      <ExcelFile
        filename={filename}
        element={
          <Button variant="contained" color="primary">Download</Button>
        }>
        <ExcelSheet data={this.props.exportedRatings} name="Sheet">
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
            <ExcelColumn label={filename} value="filename" />
        </ExcelSheet>
      </ExcelFile>
    );
  }
}

export default Download;
