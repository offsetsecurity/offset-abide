# Using Offset

For the people who use it day to day. If you are installing it, read
[INSTALL.md](../INSTALL.md) instead.

You do not need to read this end to end. Find what you are trying to do.

| I want to | Go to |
|---|---|
| Understand what this is for | [What it does](#what-it-does) |
| Sign in the first time | [Getting in](#getting-in) |
| Know what the front page is telling me | [Dashboard](#dashboard) |
| Be told what to do next | [Get ready](#get-ready) |
| Check every risk is treated, and the proof is current | [Golden thread](#golden-thread) |
| Record what we have and have not done | [Requirements](#requirements) |
| Say what you decided about an addressable item, and why | [The addressable decisions](#the-addressable-decisions) |
| Attach proof to a requirement | [Evidence on a requirement](#evidence-on-a-requirement) |
| Set deadlines and chase people | [Due dates and reminders](#due-dates-and-reminders) |
| Attach proof | [Evidence](#evidence) |
| Track risks | [Risks](#risks) |
| Plan a change safely | [Tasks](#the-other-registers) |
| Start a register from ready-made examples | [Sample library](#sample-library) |
| Keep the records the Rules expect: business associates, training, objectives, interested parties, reviews | [The management-system registers](#the-management-system-registers) |
| See everything that is due | [Calendar](#calendar) |
| See what is left to do | [Gap analysis](#gap-analysis) |
| Read the guides inside the product | [Help and Documentation](#help-and-documentation) |
| Get data in or out as a spreadsheet | [Spreadsheets](#spreadsheets) |
| Produce something for an auditor or an investigator | [Reports](#reports) |
| Add a colleague | [Users](#users) |
| See who changed what, or give an auditor the record | [Audit trail](#audit-trail) |
| Take or restore a backup | [Backups](#backups) |
| Stop the browser saying "Not secure" | [Settings](#settings) |

---

## What it does

It keeps your compliance programme in one place, so that when somebody asks
"are we doing this, and can you show me" there is an answer.

**Offset Abide** covers the **HIPAA Security Rule and Breach Notification
Rule**: 72 requirements in 6 parts, being all 29 standards and the 43
implementation specifications under them. The menu calls them Requirements,
and asks **is this in place?** You answer with a status. Every addressable
specification also carries the decision you made and the reason for it.

The menu is on the left, in groups. Documentation and Help are at the bottom.
To make more room for the page, press the arrow at the top of the menu: it
shrinks to icons, and pointing at an icon shows its name. Press the arrow again
to bring the names back. Your browser remembers which way you left it.

**This does not make you compliant, and there is no such thing as HIPAA
certification.** It is a place to record and show your own work, and to have
the records ready on the day OCR asks for them. It is not legal advice.

---

## Getting in

Your administrator gives you a username and a password, and the address, which
looks like `https://offset.yourcompany.local` or `http://localhost:8080`.

You may also get an email saying an account has been created. **It will not
contain your password.** That is deliberate: email is not a safe place to keep
one. Ask whoever set up your account.

### If you forget your password

**Everyone except administrators:** ask an administrator. They can set a new one
for you under **Users**.

**Administrators:** click **Forgot password?** on the sign-in page and enter
your username or email address. A temporary password is emailed to you.

- It works **once**, for **30 minutes**.
- Signing in with it takes you straight to **Choose a new password**. Nothing
  else opens until you have.
- Your old password keeps working until then, so if you remember it after all,
  just use it.
- Everywhere else you were signed in is signed out once the new password is set,
  and you get an email saying the password was changed.

The page says the same thing whatever you type, whether or not the account
exists. That stops anyone using it to find out who your administrators are. If
no email arrives, email may not be set up: ask another administrator, or see
**Locked out** in `INSTALL.md`.

To change your password when you do know it, use **Change password** at the top
right of any screen.

### If the browser warns you

**"Your connection is not private"** or **"Not secure"** means the server has
no certificate your browser trusts. Do not click through. Tell your
administrator: they can fix it for everyone in a few minutes, under
**Settings → HTTPS certificate**, with a certificate from your IT team. It costs
nothing.

### What you are allowed to do

Four roles. Yours is shown under your name, top right.

| Role | Can do |
|---|---|
| **Administrator** | Everything, plus adding people and changing settings |
| **Contributor** | Read and change all compliance data. Most people. |
| **Auditor** | Read everything, including the audit trail. Cannot change anything. |
| **Read only** | Read everything. Cannot change anything. |

If a button is missing or a change is refused, that is your role, not a fault.

---

## Get ready

If you have never done this before, start here.

It is a plan in 6 stages, from setting the product up to keeping it going,
ending with the habit that keeps the work from going stale.
Each stage opens into a short list of steps, and each step says three things:
what to do, why it matters, and a button that takes you to the screen where you
do it.

### Your next step

The box with the blue border, under the stages, is the one thing to do now: the
first step not yet done, in the order of the plan. It says what to do and why,
with the same buttons as everywhere else: **Take me there**, **Assign it** and
**Does not apply to us**. Underneath, **After that** names the two steps that
follow.

**Nearly there** lists checks that are almost passing, such as "91 of 92 that
apply have an owner". Each is usually one or two fixes. It only appears when
there is something nearly done.

The golden thread box says how many links between your risks, what treats them
and the proof need fixing. Click it to open the [Golden thread](#golden-thread).

The page's longer introduction is behind **How this works**, at the top.

### Green on its own, or ticked by you

Every step is one of two kinds, and it says which:

- **Checked for you.** The product looks at its own data. "Score every requirement"
  goes green when they are all scored; until then it tells you how far off you
  are, like "104 of 159 answered". You cannot tick these by hand, and you do not
  need to.
- **Ticked by you.** Things no software can see: whether your board approved a
  policy, whether staff actually follow it, whether somebody was made
  accountable. You tick these, and the product records who ticked and when.

The difference is on purpose. A plan that claimed to verify "get management to
approve this" would be lying to you.

### Doing them out of order

Nothing is locked. The numbers are the order most organisations find easiest,
not a rule. If you want to write your policies before assessing anything, click
stage 4 and do it. The rings along the top show where everything stands:
each one fills as its steps are done, and turns solid green with a tick when the
stage is finished. The stage suggested next says **next** under it.

### If something does not apply to you

Any step can be excluded, and the product asks why. Excluded steps stop counting
against you — a stage of four steps with one excluded is finished when the other
three are done.

The same is true of requirements. Open one and there is **Does this apply to you?**
near the top. Say no, write the reason, and it comes out of your average, your
percentage and your charts. Your score is kept, so if you change your mind you
get the assessment back rather than doing it again.

**Be strict with yourself.** "We have no payment systems" is a reason. "We have
not got round to it" is not — that one is just outstanding, and an assessor can
tell the difference at a glance.

### Printing it

The **Readiness plan** report puts the whole thing on paper: where each stage
stands, what is still to do, what you excluded and why, and who decided each
one. It is the document to take to your management when nobody has asked you
for a report yet.

### Get ready for HIPAA

6 stages, 29 steps. 20 of them are checked for you.

HIPAA has no certificate and no pass mark. So what the plan works towards is
being able to show, on the day somebody asks, four things: where patient data
is, what could happen to it, what you did about that, and what you will do
when something goes wrong.

| Stage | Covers | Goes green when |
|---|---|---|
| **1. Set the product up** | — | Colleagues added, email working, your Security Official named, a backup has run |
| **2. Know what you hold** | 164.308(a)(1), 164.308(b) | Every system that touches patient data is listed, every vendor too, each with a signed agreement, and your scope is written |
| **3. The risk analysis** | 164.308(a)(1)(ii)(A) and (B) | Your risk method is written, risks are recorded and owned, each is linked to the systems it threatens, and the serious ones are work |
| **4. Work through the safeguards** | 164.308, 164.310, 164.312 | Every requirement has an owner, every addressable one has a written decision, the policies exist and are approved, training is recorded |
| **5. Prove it** | 164.308(a)(6), 164.316, Subpart D | Evidence is attached and dated, an access review is done, a backup has been restored, incident reporting works, and the breach procedure is written |
| **6. Check it still works** | 164.308(a)(8) | The gap report is read, the requirements you rely on most are tested, recurring work is in the Calendar, and the report is produced and kept |

**The risk analysis comes first on purpose.** It is what OCR asks for at the
start of almost every investigation, and it is the thing most organisations
have either never done or never repeated.

Some things only a person can confirm, such as having restored a backup or
held the training. You tick those.

**Write the breach procedure before you need it.** Stage 5 asks for it while
nothing is happening, because the 60-day clock in 164.404 starts on discovery,
not on the day you work out what to do.

---

## Golden thread

Every risk, the controls that treat it, and the proof that they work, drawn as
one map. In the menu under **Get ready**.

It is the line an auditor follows. They pick a risk, ask what reduces it, and
ask to see that working. A break anywhere along the line is where a finding
comes from.

- **Risks** are on the left, **every control** in the middle (grouped as in the
  framework, each with its owner), and **proof** on the right with its age in
  days.
- **Point at anything** and its whole thread lights up. **Click it** for the
  details: who owns it, what it is linked to, and what is wrong. Press Esc or
  click again to close them.
- **Only problems** hides everything that is fine. The search box finds a risk,
  a control or a piece of proof by name.

What the colours mean:

| Line | Means |
|---|---|
| Green | Satisfied. A control that is in place, with current proof and an owner, and the lines that join it |
| Red dashes | Broken. A risk you are reducing has nothing treating it, or a control marked implemented has no proof |
| Amber dashes | Weak. The newest proof is over 90 days old or has no date, or the control has no owner |
| Dotted box | Not applicable, so nothing is needed |

Accepted, avoided and closed risks need no control, so they never count as
broken. A control that is not linked to any risk is shown, and counted, but is
not a problem: it may be there for a law or a contract instead. Auditors do ask.

**Fixing a break from the screen.** Click a broken risk or control and the
details panel offers the fix, if you are allowed to edit:

- A risk with nothing treating it: **Link** the controls that treat it. Type to
  search, click one to add it, then **Save the link**. **change** beside "Treated
  by" edits links that already exist.
- A control marked implemented with no proof: **Link existing proof** lists the
  evidence you have recorded. For something new, **Add new proof** opens Evidence.

The same links are on the risk form in the Risk register, under **Controls that
treat this risk**.

One piece of proof often backs several controls. Fixing it, by collecting a
fresh copy and updating its date, fixes all of them.

The figures across the top are the same ones the Get ready page shows.
Products with a very large framework open on **Only problems**.

## Dashboard

The front page. Four figures across the top.

**Profile readiness** — how much of the framework you have implemented, as a
percentage of what is in scope. Anything marked Not Applicable is excluded, so
the number reflects what you actually intend to do.

**Open risks** — risks not yet closed. The note says how many are critical.

**Evidence items** — how many pieces of proof you hold, and how many need
refreshing.

**Evidence gaps** — **the most useful number here.** Requirements you have marked
Implemented with no evidence attached. It is the answer to "we say we do this,
but can we prove it". An auditor will find these. Better that you do first.

Below: readiness by part, and a coverage chart showing where you
are strong and where you are thin.

Every figure is worked out live from the same data as the screens. If a number
looks wrong, open the screen underneath it and the reason is usually obvious.

---

## Requirements

The core of the product: every requirement in your framework, one row each.

Here this is 72 rows: 29 standards, each with its implementation
specifications underneath, 43 in all. You answer on both. A standard with no
specifications under it — most of 164.310 — is answered on its own.

**Click a row to open the requirement.** At the top is what it means in plain
words: what it is, what to do about it, and what an assessor or auditor will
look for. It also lists the records that prove it.

### The four statuses

| Status | Means |
|---|---|
| **Not Started** | Nothing done yet |
| **In Progress** | Being worked on |
| **Implemented** | Done and operating |
| **Not Applicable** | Does not apply to you |

**Not Applicable needs a reason.** Write why in the justification. "We have no
industrial control systems" is a good reason. Blank is not, and an auditor will
ask about every single one.

Not Applicable requirements come out of your readiness percentage. That is correct,
and it is also how a percentage gets dishonest — if you mark things Not
Applicable to make the number look better, the number stops meaning anything.

### Working through them

Change the status and the owner straight in the list. No save button; it saves
as you go, and puts it back if the server refuses.

Click a row for the detail: notes, what evidence is attached, related risks.

Filter by status, by theme or function, or search. The usual first job is
filtering to Not Started and giving each one an owner.

**Give everything an owner.** A requirement with nobody's name against it is one
nobody is doing.

### Testing a requirement

Open a requirement and there is a **Testing** box under its evidence. Record the
date you tested it, the result — Pass, Partial or Fail — who did it, and what
you found.

A status says what somebody believes today. A test says what happened on a day,
and the list of them is how you show a requirement that keeps working rather than
one that was set up once. Saved as soon as you press the button, and each test
stays as its own line.

---

## The addressable decisions

The record OCR asks for when it wants to know why you did not do something.
The Rule marks 22 of its implementation specifications **addressable**. That
does not mean optional.

It means you decide, in writing, whether each one is reasonable and
appropriate for you. If it is not, you write down what you do instead.

Open **Applicability** in the menu.

**At the top**, two boxes:

- **Scope.** What your programme covers: which parts of the organisation,
  services, locations and systems hold electronic patient data, and what is
  left out.
- **Risk assessment methodology.** How you score risk, what score is
  acceptable, and who can accept a risk. 164.308(a)(1)(ii)(A) and (B) both
  rest on it.

Beside them, the product counts how many requirements apply, how many of those
are implemented, and how many exclusions have no reason.

**Below**, one row per requirement:

| Column | What you do |
|---|---|
| **Applies** | Choose **Applies** or **Excluded** |
| **Status** | Shows how far along it is. Change it in Requirements |
| **Justification** | Write the reason, in a few words |

**A required specification cannot be excluded.** The 21 marked Required are not
a decision you get to make. If one of them does not apply to you at all — the
facility rules where you hold no premises of your own — say exactly that, and
say what you do instead.

**For an addressable one, write the reasoning, not the conclusion.** "Too
expensive" is not a reason. "Encryption at rest is not reasonable on this
device because it never leaves the locked server room, so we control access to
the room instead" is one, and it is the sentence an investigator reads.

The filter at the top shows **Excluded without a reason**, which is the list to
clear.

**The contradiction warning.** If a requirement is excluded but one of your
risks points at it, the screen says so and the row is marked. Either it applies
after all, or the risk should not point at it.

**Exporting it.** In **Reports**, download **Statement of Applicability**: your
decisions, their reasons and their status, as one PDF. Have it approved, keep
the approved copy in **Evidence**, and export it again whenever the decisions
change. This document, the risk analysis and your policies are the three things
asked for first.

---

## Evidence on a requirement

Anything you mark as in place, you are claiming is defined, approved, in use
and monitored. An assessor will ask you to show it. Attach it while you are looking
at the requirement, rather than trying to remember later.

Open a requirement and there is an **Evidence** panel. Three ways to add something:

| Button | Use it when |
|---|---|
| **Upload a file** | You have the document on your computer. It is stored, named after the file, and linked to this requirement in one step |
| **Link something I already have** | You recorded it earlier against another requirement. Search and pick it |
| **Record it without a file** | The proof exists but not as a file — signed minutes in a cabinet, a report in another system. Record what it is and who owns it |

**It is the same evidence as the Evidence tab.** Not a copy. Attach something
here and it appears there; link it there and it appears here. One item can
support many requirements, which is normal — one approved policy is evidence for a
dozen of them.

**Unlink** removes it from this requirement only. The evidence itself is kept.

---

## Due dates and reminders

Each requirement can carry a deadline and the address of whoever owns it. Open a
requirement and you will find them under Owner:

- **Due by** — when the work should be finished
- **Email reminders to** — where the chasing goes

**Both are needed, or nothing happens.** A date with nobody to tell, and an
address with no deadline, are each harmless on their own. That is deliberate.
The product should not start emailing your colleagues because somebody typed an
address once.

### What gets sent

Once a day, each person gets **one email about their own requirements only** —
never a long list of everyone's work, which is how reminders end up in a filter.

It lists anything overdue first, then anything due within the next seven days,
with the reference, the deadline and the current status of each.

To stop the emails for a requirement, clear the address on it.

### On the register

The **Due** column shows the date. It turns amber as the deadline approaches and
red once it has passed, so you can see the pressure without opening anything.

The date is set on the requirement rather than edited in the list, on purpose:
deciding to start emailing a colleague deserves the screen where the
explanation sits next to it.

---

## Evidence

Proof. Where most of the real value is, and where most programmes fall down.

Each item records what the proof is, who owns it, when it was collected, and
which requirements it supports.

### Freshness

Evidence goes out of date. The colour tells you how far:

| | Age |
|---|---|
| **Fresh** | within 30 days |
| **Ageing** | 30–60 days |
| **Due** | 60–90 days |
| **Stale** | older than 90 days |
| **No date** | never recorded |

Work from Stale downwards. A firewall review from eighteen months ago proves
what was true eighteen months ago.

### Attaching the document

Click **Attach a file** in the Document column. Up to 25 MB.

The file is stored with the record, and a checksum is kept so you can tell
later whether it changed.

**Attach the actual thing.** A row saying "firewall review" is a claim. The
review itself is evidence. When an auditor says "show me", one of those works.

Click the filename to download it. **Remove** takes the file away and keeps the
record.

### Linking to requirements

Link each item to the requirements it supports. This is what makes the **Evidence
gaps** figure work, and what lets a report say which requirements are proven.

One document often supports several requirements. Link it to all of them.

---

## Risks

Your risk register, with a heat map.

Score each risk on **likelihood** and **impact**, 1 to 5. Multiplied together:

| Score | Band |
|---|---|
| 20 and above | **Critical** |
| 12 to 19 | **Elevated** |
| Below 12 | **Acceptable** |

Record an inherent score — before your requirements — and a residual score after
them. The gap between the two is what your requirements are worth, which is a
question you will eventually be asked.

Set a treatment: mitigate, transfer, avoid or accept. **A risk you accept will
not save without a name against it.** Somebody with the authority to accept it
did so, and that is the record. Put the date in too, even though it is not
forced — "who accepted this and when" is one question, not two.

Link risks to the requirements that reduce them and to affected assets.

---

## Sample library

A blank register is the hardest place to start, so **Risks**
and **Assets** each have a **Sample library** tab next to the register.

It holds ready-made examples to react to, grouped so you can open only the ones
that fit you:

| | |
|---|---|
| **Assets** | Systems, devices, cloud services, security tools, people and roles, how the work gets done, policies and records, facilities, and the ways data leaves the building. 80 in all, drawn from healthcare |
| **Risks** | The programme itself, patient data in motion and at rest, vendors, people, and the notification duties. 40 in all |

Each sample risk comes with a likelihood, an impact, a suggested owner and the
requirements that usually treat it. Every one of the 29 standards has at least
one sample risk against it.

Each sample asset says whether it is a primary asset - the information and
the business processes - or a supporting one that holds or carries them, and
points at the requirements that govern assets of that kind.

**Add** copies a row into your register, and that is all. Once added it is
yours: rename it, rescore it, or delete it like anything else. Samples you have
already added are shown dimmed, so you do not lose your place.

**Scores are a first guess, not an answer.** Change them to fit your
organisation. Ten risks that are really yours beat a hundred copied without
thought, and an auditor can tell the difference.

---

## The management-system registers

The records the Rules expect that are not requirements, not risks and not
evidence. Each is a list with a search, a filter and an add button, like every
other register.

**Suppliers.** Who you rely on, and what they do for you. How sensitive the
information they hold is. What assurance they gave you - a certificate, a
report, a questionnaire. And when you will look at them again. This is your business associate register: link each
one to the requirements it supports and the risks it carries, and record when
the agreement was signed and when it is next reviewed. Covers 164.308(b) and
164.314(a).

**Training.** Who was trained, on what, when, and when it is due again. Covers 164.308(a)(5), the
security awareness and training standard. Auditors sample these records, so keep
them as you go.

**Objectives.** What you are aiming at, how it is measured, the target, who owns
it, and by when. The Rule does not ask for objectives by name, but a
programme without them cannot show it is being managed.

**Interested parties.** Who cares about your security — customers, your
regulator, staff, suppliers, owners — what they need from you, and how you meet
it. This is where patients, your payers, your
regulator and your business associates go.

**Audits and reviews.** Internal audits, management reviews, external audits and
supplier audits. A planned entry with a date is your review
programme; a completed one records who took part and what came of it. The Rule
asks for periodic evaluation at 164.308(a)(8). Record anything
found in **Findings**.

**Communications.** What you tell people about security, to whom, how often,
and when it is next due.

For example: the policy to all staff on joining and once a year, phishing
reminders each quarter, supplier duties when a contract is signed, incident
reporting to the board. 164.308(a)(5)(ii)(A) asks for periodic security reminders,
which is a plan rather than a folder of sent emails. Put a
next-due date on each and it appears in the **Calendar**.

**Corrective action, on the finding.** A finding also asks for the root cause, what you changed, how you checked the change worked, and who checked
it. Four boxes. The list shows whether each finding has been
acted on and checked.

---

## Gap analysis

The Requirements screen answers "where does this requirement stand". This one answers
"what is left", which is the question asked before an audit.

Four numbers at the top:

| | |
|---|---|
| **Done and proved** | Implemented, with evidence attached |
| **Not started** | Nothing recorded yet |
| **In progress** | Started, not finished |
| **Claimed, unproved** | Marked implemented with nothing attached to prove it |

That last one matters most. A requirement you claim without proof is the one an
auditor finds, and it is worse than an honest gap.

Under that, each theme with a bar, and the list itself. Filter by what kind of
gap it is, or by theme. **Raise a task** on any row creates a task linked to
that requirement, with its owner and due date, so the gap becomes work with a name
against it.

---

## Help and Documentation

Two items in the menu, both readable inside the product.
Nothing is downloaded, and nothing you read leaves the server.

**Help** — short answers: your first hour, what each screen is for, who can do
what, where your data lives, and the questions that come up in the first week.

**Documentation** — five guides: quick start, using it day to day, the
administrator guide, a playbook for the product's framework, and collecting
evidence from AWS, Azure, Microsoft 365 and Google Workspace.

| | |
|---|---|
| **Its playbook** | The Rules, the risk analysis, and the first day of a breach |
| **Its evidence page points at** | HIPAA citations, such as 164.312(a)(2)(iv) |

They ship with the product, so they describe the version you are running.

**The same documents come in the box.** Every installer has a `docs` folder.
In it: this user guide, the install guide, the security overview, the privacy
sheet, a troubleshooting guide and the release notes. On Windows the Start
menu has a shortcut to it.

---

## Spreadsheets

Every register has **Export CSV** and **Import CSV**.

**Export** gives you the rows currently on screen — filters and search
included — with the same column headings the add form uses. It opens in Excel
with accents intact.

**Import** adds rows from a file. The headings are matched to the fields by
name, anything unrecognised is ignored, and **nothing already in the register
is changed or removed**. You see how many rows were found and which columns
matched before anything is added.

If the file has no column for a required field, it says so and adds nothing.
The quickest way to get the headings right is to export first and fill in the
file you get back.

Rows are added one at a time through the same checks the form uses, so one bad
date does not stop the other forty-nine rows.

---

## Calendar

Everything with a date on it, in one place: policy reviews, tasks, findings,
evidence going stale, supplier reviews, objectives, training due again, planned
audits and requirement due dates.

Three groups: **overdue**, **the next 30 days**, and **after that**. Look ahead
30 days, 90 days, six months or a year.

Nothing is edited here. Each row has a button to the screen it came from, which
is where its date is changed.

---

## The other registers

Same shape: a list, a filter, a search, a dialog to add and edit.

**Assets** — what you hold that matters. Primary or supporting, with a
criticality and a classification.

**Policies** — Draft, In Review, or Approved. Set a review date. Version history
is kept, so "which version was in force in March" has an answer.

**Tasks** — the work outstanding. Owner, due date, priority. Anything overdue
appears in the daily email.

Set **Kind** to **Change** for a planned change - to the way you work, or to
a system. Then fill in **what this change means for security**: what it
affects, what could go wrong, and what you will do about it. That is clause 6.3 in two
boxes, and it keeps planned changes in the same list as the work, rather than in
a second list nobody updates. Filter the list by kind to show only changes.

**Incidents** — what happened. Severity Low to Critical; status from Open
through Investigating, Contained and Resolved, to Closed.

**Findings** — raised against you, by an auditor or internally. **A closed
finding must say what closed it.** "Closed" on its own is not a record of
anything.

---

## Reports

PDFs to hand to someone. Click **Download** on any of them.

| Report | What it is for |
|---|---|
| **Executive summary** | One or two pages for a board or a manager |
| **Gap report** | Everything not yet implemented, and who owns it |
| **Risk register** | The full register with scores and treatments |
| **Evidence register** | What proof you hold and how fresh it is |
| **Readiness plan** | Your Get ready plan on paper |
| **Management review pack** | The inputs clause 9.3 asks for, in one document |
| **Document control list** | Every document, its version, approval and review date |
| **Statement of Applicability** | Your addressable decisions, their reasons and their status |

### Your own logo

Administrators can upload your organisation's logo under Reports. It appears at
the top of every report, where an auditor expects to see the name of the
organisation being audited.

Without one, reports carry the Offset Security mark instead.

### What is in them

Whatever is in the system when you press the button, with the date and your
name on it. A report that cannot say when it was produced is not evidence of
anything.

---

## Users

Administrators only.

Add someone with a name, a username, an email and a role. They get told the
account exists — **not the password.** Give them that yourself, in person or
through a password manager.

**Disable, do not delete.** The audit trail points at people. Deleting an
account would leave "who approved this" without an answer, which is the one
question an audit trail exists to answer. Disabling stops them signing in and
keeps the history.

If somebody is locked out after too many wrong passwords, **Unlock** clears it.

Two limits stop password guessing. Five wrong passwords lock that account for
15 minutes. Twenty failed sign-ins from one address, to any accounts, block
that address for 15 minutes, so one computer cannot guess at everyone's
password or lock everyone out.

---

## Audit trail

Administrators and auditors only. Nobody else sees it in the menu: it holds
failed sign-ins and addresses, which are security information.

It lists everything that happened, newest first: who, when, what they did,
which record, and the address they came from.

- **Search**, or pick a person, an action, or dates.
- **Click an entry** to see what it changed: each field, before and after.
  For something added or deleted, it shows the values it had.
- **Download CSV** gives everything that matches the filters, as a
  spreadsheet. Hand it to an auditor as evidence. The download is itself
  recorded.

**Nothing here can be changed or deleted**, by anybody, including
administrators. Entries are kept for ever unless whoever runs the server sets
a retention period (`AUDIT_RETENTION_DAYS`).

---

## Backups

Administrators only.

A backup is one file holding everything: the database and every evidence
document. One is taken automatically every night. The newest three backups are
kept, counting every kind together, and older ones are deleted.

**Take a backup now** before a big change, such as importing a lot of data.

**Download** saves a backup to your computer. Do this now and then and keep the
file somewhere other than the server. The file holds everyone's password hashes
and every document, so keep it safe.

**Upload a backup** adds a file you downloaded earlier back to the list. It is
checked first, and refused if it is damaged, not an Offset backup, from a
different product, or from a newer version.

**Restore** puts everything back as it was in that backup. You are asked to type
RESTORE first, because anything added or changed since that backup is replaced.
Before it starts, a backup of everything as it is now is taken, so a restore of
the wrong one can be undone. Everyone is signed out afterwards and signs in with
the accounts as they were in the backup.

---

## Settings

Administrators only.

**Outgoing email** — optional. Everything works without it. Set it up and you
can send the daily digest.

**Daily digest** — one message a day listing what needs attention: evidence out
of date, overdue tasks and findings, policies due for review, open risks in the
top band.

**It sends nothing on a day when nothing needs attention.** That is on purpose.
A message that arrives every morning saying nothing is one people stop reading,
and the morning it matters they will not read that one either.

Use **Preview today's** to see what it would say before turning it on.

**HTTPS certificate** — stops the browser saying "Not secure". Ask your IT team
for a certificate for the name people type to reach this server, issued by your
company's own certificate authority. It is free, and every company computer
already trusts it. A `.pfx` file with its password works, and so do a
certificate and key as PEM files.

Click **Choose files**, pick them, type the password if there is one, and click
**Upload certificate**. It is checked first. Anything worth knowing - it is for
a different name, it is self-signed, it expires soon - is shown before it
replaces the one you have.

If the product is already on HTTPS, the new certificate is used at once. That
is how you renew it each year. If it is still on plain HTTP, it needs a restart,
and the screen says how. Old `http://` links keep working afterwards: they are
sent on to `https://`.

The section also shows the certificate in use: who it is for, who issued it,
and when it expires. It warns 30 days before. Installing and network settings
are in `INSTALL.md`, under **Turning on HTTPS**.

**Updates** — shows which version you have. **Check for updates** asks Offset
Security's release server whether there is a newer one, and shows what changed.
Nothing is checked until somebody presses it.

If there is one, **Update** installs it. A backup is taken first. The product
is then unavailable for a minute or two while it restarts. If the new version
does not start properly, the old one and your data are put back for you. The
section shows each step as it happens. When it says **Updated**, reload the page.

If the button is not offered, the section says why: usually that the server
cannot reach the internet, or that this copy was installed without the updater.
Whoever installed it can see **Updating** in `INSTALL.md`.

---

## Things worth knowing

**Everything is recorded.** Every change is written to an audit trail with who,
what and when. That is the point of the tool, and it means nothing is quietly
undone.

**It is backed up nightly**, automatically, documents included. Administrators
can take, download and restore backups under [Backups](#backups). Ask whether a
restore has ever been tested. An untested backup is a hope.

**Your data does not leave your organisation.** There is no cloud service behind
this, no telemetry, and no update check. It runs on your own machines.

**Two numbers to watch**, if you only watch two:

1. **Evidence gaps** on the dashboard — requirements you claim without proof.
2. **Stale evidence** — proof that has aged out.

Both are things you can fix quietly now, or have found for you later.

---

Questions your administrator cannot answer: **info@offsetsecurity.net**
