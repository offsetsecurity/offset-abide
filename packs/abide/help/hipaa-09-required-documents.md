# Required documents and records

HIPAA asks for two kinds of paper, and both must be kept for six years:

1. **Policies and procedures** for everything the Security Rule requires,
   written down (164.316(a) and (b)(1)(i)).
2. **Records** of every action, activity and assessment the Rule says must be
   documented (164.316(b)(1)(ii)).

This page lists both, section by section, then the breach documents, then the
retention rules.

Part of [the audit-ready handbook](hipaa-01-how-compliance-is-checked.md).
Previous: [Breach notification](hipaa-08-breach-notification.md). Next:
[Being ready for OCR](hipaa-10-ocr-ready.md).

## Policies and procedures to write

For addressable items, the written document can be your decision not to
implement it, with the reason and any alternative (164.306(d)). It must still
exist.

| Area | What to have in writing | Section |
|---|---|---|
| Security management | Risk analysis method; risk management plan; sanction policy; information system activity review procedure | 164.308(a)(1) |
| Responsibility | Written designation of the security official | 164.308(a)(2) |
| Workforce security | Authorisation and supervision; workforce clearance; termination procedure | 164.308(a)(3) |
| Access management | Access authorisation; access establishment and modification. If you run a clearinghouse inside a larger organisation, how it is isolated | 164.308(a)(4) |
| Training | Security awareness and training programme, covering reminders, malware, log-in monitoring and password management | 164.308(a)(5) |
| Incidents | Security incident procedure: how incidents are reported, handled and recorded | 164.308(a)(6) |
| Contingency | Data backup plan; disaster recovery plan; emergency mode operation plan; testing and revision procedure; criticality analysis | 164.308(a)(7) |
| Evaluation | How and when you evaluate your safeguards | 164.308(a)(8) |
| Vendors | A business associate agreement with each business associate | 164.308(b), 164.314(a) |
| Facilities | Contingency operations; facility security plan; access control and validation; maintenance records | 164.310(a) |
| Workstations | Workstation use policy; workstation security measures | 164.310(b), (c) |
| Devices and media | Disposal; media re-use; accountability; backup before moving equipment | 164.310(d) |
| Access control | Unique user identification; emergency access procedure; automatic logoff; encryption at rest | 164.312(a) |
| Audit, integrity, authentication | Audit controls; integrity controls; person or entity authentication | 164.312(b), (c), (d) |
| Transmission | Transmission security, integrity controls and encryption in transit | 164.312(e) |
| Group health plans | Amended plan documents, if you sponsor one | 164.314(b) |
| Breach | Breach notification policy and procedure | 164.414, 164.530 |

Several of these can live in one document. What matters is that each is
covered, approved, dated and available to the people who use it.

## Records to keep

| Record | Why it is needed | Section |
|---|---|---|
| Each risk analysis, including earlier versions | Shows it is accurate, thorough and kept current | 164.308(a)(1)(ii)(A) |
| Risk management actions and their status | Shows the risks found were reduced | 164.308(a)(1)(ii)(B) |
| Sanctions applied | Shows the sanction policy is used | 164.308(a)(1)(ii)(C) |
| Activity reviews carried out | Shows logs and reports are actually reviewed | 164.308(a)(1)(ii)(D) |
| Addressable decisions and their reasons | The Rule requires you to document why an addressable item is not implemented | 164.306(d)(3) |
| Access approvals and access reviews | Shows access is authorised and kept current | 164.308(a)(3), (a)(4) |
| Training records, per person | Shows the whole workforce was trained | 164.308(a)(5) |
| Security incidents and their outcomes | The Rule requires incidents and outcomes to be documented | 164.308(a)(6)(ii) |
| Backup reports and restore tests | Shows the backup plan works | 164.308(a)(7) |
| Contingency plan tests and changes made | Shows the plan was tested and revised | 164.308(a)(7)(ii)(D) |
| Evaluations | Shows safeguards were checked periodically and after changes | 164.308(a)(8) |
| Signed business associate agreements | Shows each vendor gave the required assurances | 164.308(b), 164.314(a) |
| Facility maintenance and visitor records | Shows physical controls operate | 164.310(a) |
| Device register, movement, wipe and destruction records | Shows media are tracked and disposed of safely | 164.310(d) |
| Audit logs and their protection | Shows activity can be traced to a person | 164.312(b) |
| Emergency access uses and their reviews | Shows break-glass access is controlled | 164.312(a)(2)(ii) |
| Policy review dates and changes | Shows documentation is reviewed and updated | 164.316(b)(2)(iii) |

## Breach records

Keep all of these, including for incidents you decided were not breaches:

- the four-factor risk assessment for each incident involving protected health
  information, with the decision and who made it,
- which breach exception applied, and why, if you relied on one,
- copies of notices sent to individuals, with the date and mailing list,
- any substitute notice, with where and how long it was posted,
- media notices, and the outlets they went to,
- HHS portal submission confirmations,
- the running log of breaches affecting fewer than 500 people, for the annual
  submission,
- any law enforcement request to delay notification, written or noted,
- breach notification training records.

If you decide not to notify, the burden of proving that decision was right is
yours (164.414(b)). These records are that proof.

## How long to keep it

**Six years** from the date it was created, or from the date it was last in
effect, whichever is later (164.316(b)(2)(i)). A policy retired today must be
kept for six years from today, not from when it was written.

Check that your systems do not delete sooner. Log retention, email archives and
ticketing systems often default to far less than six years.

This is the HIPAA documentation rule. How long you keep medical records
themselves is set by state law, and is a separate question.

## In Offset Abide

- **Policies** holds every policy and procedure with its version, approver,
  review date, version history and who has acknowledged it. The **Document
  control list** report lists them all.
- **Evidence** holds records, each with the date it was collected and the
  requirement it proves.
- **Applicability** holds every addressable decision and its reason.
- **Risks**, **Tasks**, **Incidents**, **Findings**, **Training** and
  **Suppliers** hold the records their names describe.
- **Backups** keep the whole database. Keep backups for at least as long as the
  records inside them must be kept.
