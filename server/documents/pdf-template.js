
const pdfTemplate = ({ logo, auditBy, agentName, date, callDate, leadId, program, eventLogId, callType, recordings, callOutcome, recordingStartTime, warmTransferEligible, leaveMessageEligible, extraNewbieQa, extraTechnicalIssueQa }) => {
  return `
  <HTML>
	<HEAD>
		<STYLE>
		table {
		    border-collapse: collapse;
		}
		tr.border_bottom td {
		  border-bottom:1pt solid black;height: 40px
		}
		tr.border_bottom_strong td {
		  border-bottom:5pt solid black;height: 50px
		}
		tr.border_bottom_strong_notes td {
		  border-bottom:5pt solid black;height: 40px
		}
		tr.headerrow td {
		  height: 30px
		}
		</STYLE>	
	</HEAD>
<BODY>
<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BGCOLOR="White">
	<TR>
	<TD>
		<img src="${logo}" width="250">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FONT SIZE="5"><STRONG>QA Monitoring Form</STRONG></FONT><P></P><BR>
	</TD>
	</TR>
	<tr>
		<td>
			<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="100%">
				<TR class="border_bottom">
					<TD><STRONG>Audited By:</STRONG></TD>
					<TD>${auditBy}</TD>
					<TD><STRONG>Date:</STRONG></TD>
					<TD>3/23/2022 12:31 PM (Balboa Digital Time)</TD>
				</TR>
				
				
				
					
				
				
				<TR class="border_bottom">
					<TD><STRONG>Agent Name:</STRONG></TD>
					<TD>${agentName}</TD>
					<TD><STRONG>Call Date:</STRONG></TD>
					<TD>${date}</TD>
				</TR>
				<TR class="border_bottom">
					<TD><STRONG>Lead ID:</STRONG></TD>
					<TD>${leadId}</TD>
					<TD><STRONG>Program:</STRONG></TD>
					<TD>${program}</TD>
				</TR>
				<TR class="border_bottom">
					<TD><STRONG>Event Log ID:</STRONG></TD>
					<TD>${eventLogId}</TD>
					<TD><STRONG>Call Type:</STRONG></TD>
					<TD>${callType}</TD>
				</TR>
				
				
					
									
				
				<TR class="border_bottom">
					<TD valign="top"><STRONG>Recording(s):</STRONG></TD>
					<TD valign="top">
						
							
								${recordingStartTime}: <a href=${recordings} target="_blank"><img src="/images/icons/play.png" width=16 border=0>40 seconds</a><BR>
							
						
					</TD>
					<TD valign="top"><STRONG>Call Outcome:</STRONG></TD>
					<TD valign="top">${callOutcome}</TD>
				</TR>				
				
				
				
				
				
				<TR class="border_bottom">
					<TD><STRONG>Warm Transfer Eligible:</STRONG></TD>
					<TD>${warmTransferEligible}</TD>
					<TD><STRONG>Leave Message Eligible:</STRONG></TD>
					<TD>${leaveMessageEligible}</TD>
				</TR>
				<TR class="border_bottom">
					<TD><STRONG>Extra Newbie QA:</STRONG></TD>
					<TD>${extraNewbieQa}</TD>
					<TD><STRONG>Extra Technical Issue QA:</STRONG></TD>
					<TD>${extraTechnicalIssueQa}</TD>
				</TR>
				
			</TABLE>
		</td>
	</tr>
	<TR><TD>&nbsp;</TD></TR>
	<script language = "JavaScript" type="text/javascript" src="/lucee/formtag-form.cfm"></script><script language = "JavaScript" type="text/javascript">
function _CF_checkQAForm() { return lucee_form_1nvr.check();}

</script><form onsubmit="return lucee_form_1nvr.check();" name="QAForm" action="/qa/qaformPDF.cfm?action=add" method="post">
	<TR>
		<TD>
			<TABLE BORDER="1" CELLPADDING="1" CELLSPACING="0" WIDTH="100%">
				<TR BGCOLOR="#AFCB1F" class="border_bottom_strong">
					<TD COLSPAN="3" ALIGN="Center"><STRONG><FONT SIZE="5">Scoring Sheet</FONT></STRONG></TD>
				</TR>
				
					
					
						
							<TR BGCOLOR="#AFCB1F" class="headerrow">
								<TD><STRONG><FONT SIZE="3">Script Usage</FONT></STRONG></TD>
								<TD ALIGN="Center" width="20%">&nbsp;</TD>
								<TD><STRONG><FONT SIZE="3">Comments</FONT></STRONG></TD>
							</TR>
							
						
						<TR>
							<TD>
								Used script engine
							</TD>
							<TD width="20%" align="center">
								Yes
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
							<TR BGCOLOR="#AFCB1F" class="headerrow">
								<TD><STRONG><FONT SIZE="3">Language Proficiency</FONT></STRONG></TD>
								<TD ALIGN="Center" width="20%">&nbsp;</TD>
								<TD><STRONG><FONT SIZE="3">Comments</FONT></STRONG></TD>
							</TR>
							
						
						<TR>
							<TD>
								Avoided unnecessary fillers
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Enunciated the words clearly and used appropriate vocabulary and grammar
							</TD>
							<TD width="20%" align="center">
								Yes
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Used appropriate tone of voice
							</TD>
							<TD width="20%" align="center">
								Yes
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
							<TR BGCOLOR="#AFCB1F" class="headerrow">
								<TD><STRONG><FONT SIZE="3">Call Handling</FONT></STRONG></TD>
								<TD ALIGN="Center" width="20%">&nbsp;</TD>
								<TD><STRONG><FONT SIZE="3">Comments</FONT></STRONG></TD>
							</TR>
							
						
						<TR>
							<TD>
								Avoided dead air and unnecessary pauses
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Call pace
							</TD>
							<TD width="20%" align="center">
								Yes
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Followed proper callback procedure
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Followed proper hold procedure
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Followed proper transfer procedure
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Handled objections/issues appropriately
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Listening skills
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Maintained call focus
							</TD>
							<TD width="20%" align="center">
								Yes
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Showed courtesy and professionalism in the call
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
							<TR BGCOLOR="#AFCB1F" class="headerrow">
								<TD><STRONG><FONT SIZE="3">Accuracy</FONT></STRONG></TD>
								<TD ALIGN="Center" width="20%">&nbsp;</TD>
								<TD><STRONG><FONT SIZE="3">Comments</FONT></STRONG></TD>
							</TR>
							
						
						<TR>
							<TD>
								Documented appropriate information in notes
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Identified concerns/issues
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Provided accurate and complete information or solution
							</TD>
							<TD width="20%" align="center">
								Yes
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Transferred to correct partner per script engine
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Verified and obtained all required and necessary information
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
							<TR BGCOLOR="#AFCB1F" class="headerrow">
								<TD><STRONG><FONT SIZE="3">Compliance</FONT></STRONG></TD>
								<TD ALIGN="Center" width="20%">&nbsp;</TD>
								<TD><STRONG><FONT SIZE="3">Comments</FONT></STRONG></TD>
							</TR>
							
						
						<TR>
							<TD>
								Abided by company policies and procedures
							</TD>
							<TD width="20%" align="center">
								Yes
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Clearly selected the right disposition, or made a reasonable judgement call as to the appropriate disposition
							</TD>
							<TD width="20%" align="center">
								Yes
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Did not give advice regarding bankruptcy or debt
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Did not promise approval of loan or program
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Marked as Do Not Call
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								No client complaint
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Recorded call notice
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
							<TR BGCOLOR="#AFCB1F" class="headerrow">
								<TD><STRONG><FONT SIZE="3">Technical</FONT></STRONG></TD>
								<TD ALIGN="Center" width="20%">&nbsp;</TD>
								<TD><STRONG><FONT SIZE="3">Comments</FONT></STRONG></TD>
							</TR>
							
						
						<TR>
							<TD>
								Agent line choppy, lagged, jitter, static or dropped; agent handled appropriately during call and escalated, if appropriate
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
						
						<TR>
							<TD>
								Consumer or partner line choppy, lagged, jitter, static or dropped; agent handled appropriately during call
							</TD>
							<TD width="20%" align="center">
								N/A
							</TD>
							<TD>
								
							</TD>
						</TR>
					
				
				<TR BGCOLOR="#AFCB1F" class="headerrow">
					<TD COLSPAN="3" ALIGN="Center"><STRONG><FONT SIZE="3">Other Comments / Recommendations</FONT></STRONG></TD>
				</TR>
				<TR class="border_bottom_strong_notes">
					
						
						<TD COLSPAN="3">
							No other comments or recommendations.
						</TD>
					
				</TR>
				
			</TABLE>
		</TD>
	</TR>
	</form><!-- name:QAForm --><script>
lucee_form_1nvr=new LuceeForms('QAForm',null);
</script>
	
		<TR>
			<TD>
				<TABLE BORDER="0" CELLPADDING="1" CELLSPACING="0" WIDTH="100%">
					<TR>
						<TD valign="top">
							
								<img src="/images/signatureblock.png">
							
						</TD>
						<TD valign="top">
							<TABLE BORDER="1" CELLPADDING="1" CELLSPACING="0" ALIGN="RIGHT">
								<TR class="headerrow">
									<TD><STRONG>Total Number of Yes</STRONG></TD>
									<TD align="center">8</TD>
								</TR>
								<TR class="headerrow">
									<TD><STRONG>Total Number of No</STRONG></TD>
									<TD align="center">0</TD>
								</TR>
								<TR class="headerrow">
									<TD><STRONG>Total Number of N/A</STRONG></TD>
									<TD align="center">19</TD>
								</TR>
								<TR class="headerrow">
									<TD><STRONG>Total Number of Opportunities</STRONG></TD>
									<TD align="center">8</TD>
								</TR>
								<TR class="headerrow">
									<TD><STRONG>QA Score</STRONG><BR><FONT SIZE="1">(Total "Yes" Points / Total Opportunities)</FONT></TD>
									<TD align="center"><STRONG>100.00%</STRONG></TD>
								</TR>
								<TR class="headerrow">
									<TD><STRONG>Total Number of Non-Compliance</STRONG></TD>
									<TD align="center">0</TD>
								</TR>
								
							</TABLE>
						</TD>
					</TR>
				</TABLE>
			</TD>
		</TR>
	
</TABLE>

</BODY>
</HTML>
  `
}

module.exports = pdfTemplate;