import axios from 'axios';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import BDLogo from '../src/BDLogo.png';

function App() {
  const [data, setData] = useState({ 
    logo: BDLogo,
    auditBy: 'April Cunanan', 
    agentName: 'Kriza "Kae" Divino',
    date: '3/23/2022 12:31 PM (Balboa DigitalTime)',
    callDate: '3/23/2022 9:19 AM (Balboa Digital Time)',
    leadId: 19711134,
    program: 'ClearOne Advantage Settlement Authorization',
    eventLogId: 49979061,
    callType: 'Outbound Call',
    recordings: `https://api.twilio.com/2010-04-01/Accounts/AC77ec0a743d0082f4dca78321ce806136/Recordings/RE7e76a6209a5926d81b1dea65e18538a0`,
    recordingStartTime: '3/23/22 9:19:40 AM',
    callOutcome: 'Voicemail',
    warmTransferEligible: 'Yes',
    leaveMessageEligible: 'Yes',
    extraNewbieQa: 'No',
    extraTechnicalIssueQa: 'No'
  });

  //warmtransfer boolean
  const createAndDownloadPdf = () => {
    //make a post request to route and pass in states
    //blob - immutable objects that represent raw data (uncommon JS format)
    axios
      .post('/create-pdf', data)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      });
  };

  return (
    <div className="App">
      <button onClick={createAndDownloadPdf}>Download PDF</button>
    </div>
  );
}

export default App;
