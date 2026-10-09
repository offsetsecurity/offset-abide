# Technical safeguards (164.312)

The technical safeguards are what your systems enforce: individual accounts, emergency access, automatic logoff, encryption, audit logs, integrity, authentication, and protection of data in transit.

Two of them decide many real outcomes. Unique user identification is required, and shared logins break the ability to trace anything to a person. Encryption is addressable, and it often decides whether a lost device becomes a notifiable breach.

Collect the evidence from the systems themselves - settings screenshots, account lists, encryption reports - and date it.

Part of [the audit-ready handbook](hipaa-01-how-compliance-is-checked.md). Previous: [Physical safeguards](hipaa-04-physical.md). Next: [Organisational requirements](hipaa-06-organisational.md).

## How to read this page

Each **standard** is followed by its **implementation specifications**. Standards are always required. Each specification is marked **Required** or **Addressable**; see [the general rules](hipaa-02-general-rules.md) for what addressable asks of you. A standard with no specifications under it must be met as written.

The section numbers and titles are from 45 CFR Part 164. The wording under each is ours, not the regulation's.

## 164.312(a)(1) Access control

**Standard.**

**Purpose.** Technical controls that let only authorised people and software reach patient data.

**What to do.** Give everyone their own account, restrict what each role can open, and make sure the system enforces it rather than relying on people behaving.

**What OCR looks for.** Shared accounts, and staff able to open records well beyond their role.

**Have ready.** User list with roles; system permission settings; evidence no shared accounts remain.

### 164.312(a)(2)(i) Unique user identification (required)

**Purpose.** Every user has their own name and number, so activity can be traced to a person.

**What to do.** One account per person, everywhere. Remove generic accounts like 'frontdesk' or 'nurse1'. If a system cannot do it, record that and plan to replace it.

**What OCR looks for.** Any shared login. This is required, not addressable: there is no version of this you can argue your way out of.

**Have ready.** Account list showing one per named person; evidence generic accounts were removed and when.

### 164.312(a)(2)(ii) Emergency access procedure (required)

**Purpose.** A way to reach patient data in an emergency, when normal access is not available.

**What to do.** Set up break-glass access: an account or procedure that gives immediate access, is alarmed when used, and is reviewed afterwards every time.

**What OCR looks for.** Either no emergency route at all, or one that is used routinely and never reviewed.

**Have ready.** Break-glass procedure; the accounts; alerts on use; review records for each use.

### 164.312(a)(2)(iii) Automatic logoff (addressable)

**Purpose.** Sessions ending by themselves after a period of inactivity.

**What to do.** Set a timeout that suits the place: short at a shared reception machine, longer in a locked office. Apply it to the EHR, not only to Windows.

**What OCR looks for.** Timeouts set so long they do nothing, or set on the desktop but not in the clinical application.

**Have ready.** Timeout settings per system and location; the reasoning where a longer one was chosen.

### 164.312(a)(2)(iv) Encryption and decryption (addressable)

**Purpose.** Encrypting patient data where it is stored.

**What to do.** Turn on full-disk encryption on every laptop, desktop and server, and on phones and tablets that hold data. Record where it is on and where it is not.

**What OCR looks for.** A lost laptop with no encryption is presumed to be a reportable breach unless a written assessment shows a low probability that the data was compromised. One encrypted to HHS's guidance is not a breach at all, because the data counts as secured. This one control often decides whether an incident becomes a notification.

**Have ready.** Encryption status report per device; the decision and reasoning anywhere it is not used.

## 164.312(b) Audit controls

**Standard.** No implementation specifications: the standard itself must be met.

**Purpose.** Systems that record what was done with patient data, and by whom.

**What to do.** Turn on audit logging in the EHR and anything else holding ePHI. Keep the logs long enough to investigate - six years is the documentation standard people usually follow. Protect them from being edited.

**What OCR looks for.** Logging switched off to save space, or logs that can be altered by the people they record.

**Have ready.** Audit settings; a sample log showing user, record, action and time; retention and protection arrangements.

## 164.312(c)(1) Integrity

**Standard.**

**Purpose.** Protecting patient data from being changed or destroyed without authorisation.

**What to do.** Restrict who can amend records, keep an amendment history, and protect backups from alteration.

**What OCR looks for.** Records that can be edited with no trace of what they said before.

**Have ready.** Amendment history in the record system; permissions showing who may change what.

### 164.312(c)(2) Mechanism to authenticate ePHI (addressable)

**Purpose.** A way to confirm that patient data has not been altered or destroyed improperly.

**What to do.** Use checksums, digital signatures or database integrity features, and verify backups restore intact.

**What OCR looks for.** No way to tell whether a file changed between backup and restore.

**Have ready.** Integrity checking in use; backup verification results.

## 164.312(d) Person or entity authentication

**Standard.** No implementation specifications: the standard itself must be met.

**Purpose.** Proving that someone is who they claim before letting them at patient data.

**What to do.** Passwords to a written standard, plus multi-factor authentication for remote access, email and administrator accounts. Extend it further as systems allow.

**What OCR looks for.** Remote access with a password alone. Stolen or guessed passwords are a common way into healthcare networks.

**Have ready.** Authentication settings; MFA coverage list; the plan for anything not yet covered.

## 164.312(e)(1) Transmission security

**Standard.**

**Purpose.** Protecting patient data while it travels over a network.

**What to do.** Use TLS for email and web, a VPN or private circuit for remote access, and secure file transfer instead of attachments where you can. Know where data leaves your network and what protects it.

**What OCR looks for.** Patient data emailed in plain text, or a fax-to-email route nobody thought about.

**Have ready.** Map of where ePHI is transmitted; the protection on each route; email encryption settings.

### 164.312(e)(2)(i) Integrity controls (addressable)

**Purpose.** Making sure data is not changed in transit without being detected.

**What to do.** Use protocols that detect tampering - TLS does this for you - and check that transfers completed intact.

**What OCR looks for.** Old interfaces running plain FTP or unencrypted HL7 feeds between systems.

**Have ready.** Protocols in use per interface; transfer verification records.

### 164.312(e)(2)(ii) Encryption (addressable)

**Purpose.** Encrypting patient data as it crosses a network, whenever that is reasonable.

**What to do.** Enforce TLS everywhere. For patient email, use a secure message portal, or get and record the patient's agreement to unencrypted email if they ask for it.

**What OCR looks for.** Internal traffic assumed safe because it is 'on our network'.

**Have ready.** TLS enforcement settings; secure messaging arrangements; recorded patient preferences.

## In Offset Abide

Every item on this page is in **Requirements**, with the same guidance. Record addressable decisions and their reasons in **Applicability**. Evidence for system settings and reports, Testing for checks that controls still work, Assets for the routes ePHI travels.
