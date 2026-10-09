# The general rules (164.302 to 164.306)

Before the safeguards, the Security Rule sets out who it applies to, what its
words mean, and how much freedom you have in meeting it. These three sections
are short, but everything else is read through them.

Part of [the audit-ready handbook](hipaa-01-how-compliance-is-checked.md).
Next: [Administrative safeguards](hipaa-03-administrative.md).

## 164.302 Applicability

Covered entities and business associates must meet the Security Rule's
standards, implementation specifications and requirements for the electronic
protected health information (ePHI) they hold.

If you are a business associate, this applies to you directly, not only through
your contracts.

## 164.304 Definitions

The terms that matter most in practice:

| Term | What it means |
|---|---|
| Security incident | An attempted or successful unauthorised access, use, disclosure, change or destruction of information, or interference with how an information system works. Attempts count. |
| Administrative safeguards | The policies, procedures and actions that manage security, including managing the workforce. |
| Physical safeguards | The measures that protect buildings, equipment and systems from physical threats and unauthorised physical access. |
| Technical safeguards | The technology, and the policies for using it, that protect ePHI and control access to it. |
| Workstation | A computer, laptop or similar device, and the electronic media stored in it. |
| Encryption | Using an algorithm to turn data into a form that cannot be read without a key. |
| Workforce | Employees, volunteers, trainees and anyone else whose work is under your direct control, whether or not you pay them. (Defined in 160.103.) |

Because a security incident includes attempts, your incident log should never
be empty. See [Administrative safeguards](hipaa-03-administrative.md), 164.308(a)(6).

## 164.306 General rules

### (a) What you must achieve

1. Keep all the ePHI you create, receive, keep or send confidential, intact and
   available.
2. Protect it against threats and hazards you can reasonably anticipate.
3. Protect it against uses and disclosures the Privacy Rule does not allow,
   where you can reasonably anticipate them.
4. Make sure your workforce complies.

### (b) Flexibility of approach

You may use any security measures that let you meet the standards reasonably
and appropriately. In choosing them, you must consider:

- your size, complexity and capabilities,
- your technical infrastructure, hardware and software,
- the cost of the measures,
- how likely and how serious the risks to ePHI are.

This is why a two-doctor practice and a hospital can both comply with very
different security. It is permission to be proportionate, not permission to do
nothing. The risk analysis is what shows your choices are proportionate.

### (c) Standards

You must meet every standard in 164.308, 164.310, 164.312, 164.314 and 164.316.
Standards are never optional.

Some standards have no implementation specifications under them, such as
workstation use (164.310(b)) and audit controls (164.312(b)). For those, the
standard itself is what you must meet.

### (d) Implementation specifications: required and addressable

**Required** specifications must be implemented.

**Addressable** specifications need a decision. For each one:

1. Assess whether it is a reasonable and appropriate safeguard in your
   environment, considering how much it would help protect ePHI.
2. If it is, implement it.
3. If it is not:
   - write down why it is not reasonable and appropriate, and
   - implement an equivalent alternative measure, if one is reasonable and
     appropriate.

The written reason is the part most often missing. "Not applicable" with no
explanation is the easiest gap for an investigator to find, and it is treated
as the specification not being addressed at all. A good reason refers to your
actual risk, size and cost.

**Example.** Encryption of data at rest, 164.312(a)(2)(iv), is addressable. For
laptops it is almost always reasonable and appropriate, and a lost encrypted
laptop is usually not a notifiable breach. For a legacy clinical device that
cannot be encrypted, you might record that, isolate the device on its own
network segment, and plan its replacement. Both are defensible; silence is not.

### (e) Maintenance

Review and change your security measures when you need to, so they keep giving
reasonable and appropriate protection, and update your documentation to match
(164.316(b)(2)(iii)).

## In Offset Abide

- **Applicability**: for every addressable item, record the decision and the
  reason. For required items, record that they apply.
- **Requirements**: every standard and specification, with its owner, status
  and evidence.
- **Risks**: the risk analysis that justifies your choices under 164.306(b).
