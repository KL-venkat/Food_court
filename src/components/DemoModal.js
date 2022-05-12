// import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'

// import { Button, Icon, Modal } from 'semantic-ui-react'
// import log from 'loglevel'
// import moment from 'moment'

// import ReportForm from './ReportForm'

// import reportApi from '../../core/api/report'
// import reportDefinitionApi from '../../core/api/report-definition'

// import { ReportDefinitionType, ReportType } from 'types/report'

// import './report.styl'

// const NewReportModal: React.Component = ({ addReport }) => {
// const [open, setOpen] = useState(false)
// const [loading, setLoading] = useState(false)
// const [newReport, setNewReport] = useState(null)
// const [reportDefinitions, setReportDefinitions] = useState([])

// useEffect(() => {
// reportDefinitionApi
// .all()
// .then((reportDefs: Array<ReportDefinitionType>) => {
// setReportDefinitions(reportDefs)
// })
// .catch((error: any) => {
// log.error('[ReportForm.useEffect] getReportDefinitions', error)
// })
// }, [])

// const isFormValid = () => {
// return (
// !loading
// && newReport
// && newReport.name
// && newReport.report_definition
// && newReport.date_filter_field
// && newReport.start_date
// && newReport.end_date
// )
// }

// const sanitizeDate = (dateObject: Date) => {
// const date = new Date(dateObject)
// const year = date.getFullYear()
// let month = '' + (date.getMonth() + 1)
// let day = '' + date.getDate()

// 1
// 2
// 3
// 4
// if (month.length < 2) month = '0' + month
// if (day.length < 2) day = '0' + day

// return [year, month, day].join('-')
// }

// const openModal = () => {
// setOpen(true)
// setNewReport({
// start_date: moment()
// .subtract(1, 'days')
// .format('MMM DD, YYYY'),
// end_date: moment().format('MMM DD, YYYY'),
// description: '',
// })
// }

// const closeModal = () => {
// setOpen(false)
// setNewReport(null)
// }

// const runReport = async () => {
// setLoading(true)
// const sanitizedReport = {
// ...newReport,
// start_date: sanitizeDate(newReport.start_date),
// end_date: sanitizeDate(newReport.end_date),
// }
// return reportApi
// .create(sanitizedReport)
// .then((report: ReportType) => {
// reportApi
// .generateReport(report)
// .then((generatedReport: ReportType) => {
// addReport(generatedReport)
// closeModal()
// })
// .catch((error: any) => {
// log.error('[NewReportModal.runReport] generateReport', error)
// })
// .finally(() => {
// setLoading(false)
// })
// })
// .catch((error: any) => {
// log.error('[NewReportModal.runReport] createReport', error)
// setLoading(false)
// })
// }

// return (
// <Modal
// onClose={() => closeModal()}
// onOpen={() => openModal()}
// open={open}
// trigger={
// <Button id="newReport" icon="plus" color="green" className="fluid tiny" content="New Report" />
// }
// id="report-modal"
// className="inverted"
// >
// <Modal.Header>
// New Report
// <Icon
// name="remove"
// className="grey small link float-right margin-top-sm"
// onClick={() => closeModal()}
// />
// </Modal.Header>
// <Modal.Content>
// <Modal.Description>
// <ReportForm newReport={newReport} setNewReport={setNewReport} reportDefinitions={reportDefinitions} />
// </Modal.Description>
// </Modal.Content>
// <Modal.Actions>
// <Button
// id="closeReportModal"
// onClick={() => closeModal()}
// className="basic"
// content="Close"
// />
// <Button
// id="runReport"
// color="green"
// onClick={() => runReport()}
// className={loading ? 'loading' : ''}
// disabled={!isFormValid()}
// >
// Run Report
// <Icon name="arrow right" />
// </Button>
// </Modal.Actions>
// </Modal>
// )
// }

// NewReportModal.propTypes = {
// addReport: PropTypes.func,
// }

// export default NewReportModal;