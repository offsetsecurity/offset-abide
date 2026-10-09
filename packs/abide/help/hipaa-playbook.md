# Getting ready, in order

There is no pass mark and no certificate. What you are building is a file that
answers, on the day somebody asks, four questions:

1. Where is patient data, and who can reach it?
2. What could go wrong, and what did you do about it?
3. Can you prove what you say you do?
4. What happens when it goes wrong anyway?

Everything below serves one of those. **Get ready** walks the same path with
tick boxes; this page explains why the order is what it is.

---

## First: the risk analysis

Not policies. Not training. The risk analysis, because it decides everything
else and because it is one of the first things OCR asks for in an
investigation.

**It has to cover everything.** A very common finding is a risk
analysis that covered the EHR and nothing else — not the laptops, not the
backup service, not the billing company, not the fax-to-email route nobody
remembers setting up.

So: list the systems first (**Assets**), then work through what could happen to
each (**Risks**), then turn the serious ones into work with owners and dates
(**Tasks**).

A risk analysis with nothing behind it is treated as no risk analysis at all.
The regulation names them separately for that reason: 164.308(a)(1)(ii)(A) is
finding the risk, (B) is doing something about it.

**Redo it when things change** — a new EHR, a merger, a move to the cloud — and
at least annually regardless. An analysis dated four years ago is worse than
none, because it proves you knew you should.

---

## Second: the vendors

Every organisation that creates, receives, stores or transmits patient data for
you needs a signed business associate agreement, in place *before* they touch
it.

The ones people miss: IT support, the shredding company, the answering service,
the transcription service, the cloud storage behind a small clinical app, the
photocopier maintenance contract.

Put them all in **Suppliers**, and record which have agreements. A missing BAA
is a finding on its own, without anything going wrong, and it is trivial to
check.

Make sure the agreement actually says something: safeguards, incident reporting
to you with a stated number of days, the same terms passed to subcontractors,
and return or destruction of the data at the end. A confidentiality clause is
not a BAA.

---

## Third: the addressable decisions

Go through **Applicability** and, for every addressable item, record one of:

- we do this, or
- we do this other thing instead, which achieves the same, or
- this is not reasonable for us, and here is why.

Write the reason every time. The third option is entirely legitimate — that is
what "flexibility of approach" means — but only in writing, and only with
reasoning that refers to your actual risk, size and cost.

"Not applicable" with an empty box is the single easiest thing for an
investigator to find and the hardest to defend.

---

## Fourth: the two that decide real outcomes

Most of the Rule is proportionate judgement. Two items are not:

**Unique user identification (required).** One account per person, everywhere.
Shared logins at a reception desk or nursing station break every other control
you have, because nothing can be traced to a person. There is no version of
this you can argue around: it is required, not addressable.

**Encryption (addressable, and yet).** Encrypted data is not "unsecured", so
losing an encrypted laptop is usually not a reportable breach at all. Losing an
unencrypted one is letters to every patient, a report to HHS, and possibly the
local news. Full-disk encryption on every laptop, desktop, phone and tablet is
the cheapest risk reduction available to you.

---

## Fifth: the paperwork that proves it

Policies (**Policies**), training records (**Training**), access reviews,
restore tests, disposal certificates, log reviews — all attached to the
requirement they prove, in **Evidence**, with dates.

Two rules that catch people:

- **Six years**, from creation or from when it was last in effect. Longer than
  most log retention defaults. Check yours.
- **Write it for you.** A policy set bought as a template, still naming another
  clinic and describing systems you do not have, is read as never adopted.

---

## Sixth: what happens when it goes wrong

Before you need it: the incident route (who tells whom), the four-factor breach
assessment, and the notification deadlines.

Read **The first day of a suspected breach**. The short version: the 60-day
clock starts when *any* member of your workforce should have known, a breach is
presumed unless you can show otherwise in writing, and the annual submission of
small breaches is the deadline everyone forgets.

---

## Then keep it true

Quarterly is a reasonable rhythm for most organisations:

- access review — who has access, do they still need it
- policy reviews that fall due
- test something in **Testing** and record the result, including failures
- look at **Gap analysis** and pick off what is open

Annually:

- redo the risk analysis
- the evaluation under 164.308(a)(8)
- a restore test that actually restores
- training for everyone, including clinicians and management
- the small-breach submission to HHS, within 60 days of year end

Export a dated report each time from **Reports** and keep it. Being able to
show what your programme looked like two years ago is the difference between a
documented programme and a claim about one.
