# Common questions

## Does this make us HIPAA compliant?

No. Nothing can. HIPAA has no certificate, no pass mark and no approved product
list. Compliance is a judgement made about you, usually after something has
gone wrong.

What this does is keep the record that judgement is made from: what you hold,
what could go wrong, what you decided, and what you can prove.

## Are we a covered entity or a business associate?

Roughly: if you provide healthcare and bill electronically, you are a covered
entity. If you handle patient data on behalf of one — billing, IT, hosting,
transcription, shredding — you are a business associate.

Both must meet the Security Rule. The differences are mainly in who you notify
when something goes wrong, and who you sign agreements with. If you are a
business associate, 164.410 is your notification duty and your contract may
give you less than the 60 days the Rule allows.

## What does "addressable" mean? Can we skip it?

No. Addressable means: do it, *or* do something else that achieves the same
thing, *or* write down why neither is reasonable for you.

The third option is legitimate. It is also the one people use without the
writing, which is how a lost laptop turns into a fine. Record every addressable
decision in **Applicability**, with the reason.

## How long do we keep all this?

Six years, from creation or from when the document was last in effect,
whichever is later. That covers policies, risk analyses, training records,
incident records, access reviews, evaluations and breach assessments.

It is longer than most log retention defaults. Check yours.

## An email went to the wrong patient. Is that a breach?

Possibly. Run the four-factor assessment and write down the answer, whichever
way it goes: what data, who received it, whether it was actually read, and what
you have done to reduce the risk.

Keep the assessment even when the conclusion is "not a breach". The burden of
proof is yours, and a decision with nothing written behind it is treated later
as a breach you failed to report.

See **The first day of a suspected breach**.

## Our vendor will not sign a business associate agreement. Now what?

Then they cannot handle patient data for you. That is the whole mechanism: the
agreement is what makes it lawful.

In practice, most refusals are a small supplier who has not been asked before.
If it is a large vendor refusing, read their terms — often the BAA exists as a
separate document you have to opt into.

## Do we need encryption?

It is addressable, not required — and you should still do it.

Encrypted data is not "unsecured", so losing an encrypted laptop is usually not
a reportable breach at all. It is the cheapest risk reduction available, and
the one thing most likely to decide whether an incident becomes a public
notification.

## The Rule is changing, isn't it?

A large rewrite was proposed in January 2025: mandatory encryption and
multi-factor authentication, the end of "addressable", asset inventories,
annual penetration testing.

It is still a proposal. The final rule has slipped to around mid 2027 and may
change before then. This product follows the rules in force today, and will
follow the new ones when they are law. Most of what is proposed is what a
sensible risk analysis would have told you to do anyway.

## Does this cover the Privacy Rule?

No. Notice of privacy practices, minimum necessary, patient access and
amendment requests, accounting of disclosures — none of that is here. This
product covers the Security Rule and the Breach Notification Rule.

## Does anything leave our server?

No. No cloud, no telemetry, no licence check, no phoning home. The only
outbound connections this product makes are the emails you configure and, if an
administrator presses the button, a check for a new version.

## Who should own this in a small practice?

One person, named, who can actually decide things. In a small practice that is
usually the practice manager, with the owner backing them. 164.308(a)(2) asks
for a name, not a department.

## Why does the browser say "Not secure"?

The server has no certificate the browser trusts. An administrator fixes it
for everyone under **Settings → HTTPS certificate**, with a certificate from
your IT team. It is free: you do not need to buy one.
