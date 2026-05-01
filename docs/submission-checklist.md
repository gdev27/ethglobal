# Submission Checklist

## Core Open Agents requirements
- [x] Project name + short description finalized.
- [x] Public GitHub repo link added.
- [x] README includes setup, architecture, and demo commands.
- [x] Working technical demo completed with live credentials (`demo:deterministic`, `demo:swarm`, and `ens:passport`).
- [ ] Demo video is 2-3 minutes and shows agentic reasoning. Public upload URL must be pasted into `docs/submission-pack.md`.
- [x] Team member names + contact links (Telegram + X) added.

## Mandatory evidence to include
- [x] Deployed contract addresses listed (`docs/deployments.md`).
- [x] Triple-verified explanation included (`docs/triple-verified.md`).
- [x] Demo output JSON captured for safe, escalated, and blocked paths.
- [x] Swarm execution output captured with role traces.

## 0G track checklist
- [x] Show 0G Compute usage in planner/critic loops.
- [x] Show 0G Storage memory artifacts in demo output.
- [x] Show 0G Chain attestation mapping via `docs/evidence/trust-evidence.json` (`attestation`) with explicit simulated adapter receipt marker for the current judging run.
- [x] Include one framework example and one autonomous swarm example.

## ENS track checklist
- [x] Show ENS identity passport output (`npm run ens:passport`).
- [x] Show role/subname identities and metadata fields.
- [x] Show authorization and reverse-verification in runtime flow.
- [x] Confirm no hard-coded values in final demo path.

## KeeperHub track checklist
- [x] Explain KeeperHub usage and why it is integral (not optional).
- [x] Show workflow submission, run status, logs, and analytics evidence.
- [x] Include encrypted audit artifact examples in repo or demo output.
- [x] Submit actionable integration feedback (`KEEPERHUB_FEEDBACK.md`).

## Final dry-run checklist (24h before deadline)
- [ ] Fresh clone setup test succeeds.
- [x] `npm run judge:preflight` passes.
- [x] `docs/evidence/judge-preflight-report.md` captured and reviewed.
- [ ] Video narration matches live outputs.
- [ ] Live demo, video, and submission form links are valid and public.

## Automated trust gates
- [x] Trust invariants documented: `docs/trust-invariants.md`
- [x] Structured trust evidence exists: `docs/evidence/trust-evidence.json`
- [x] Evidence schema validation wired: `npm run validate:evidence`
- [x] Env contract validation wired: `npm run validate:env`
- [x] Submission trust claims covered by tests: `test/submissionTrustClaims.test.ts`

## Owner + evidence mapping (fill as completed)
- [x] Core demo owner: `Gaurav Dev`
- [x] ENS evidence owner: `Gaurav Dev`
- [x] 0G evidence owner: `Gaurav Dev`
- [x] KeeperHub evidence owner: `Gaurav Dev`
- [x] Video owner assigned: `Gaurav Dev`
- [ ] Video URL pasted into `docs/submission-pack.md`

## Verification snapshot
- Source of truth: `docs/evidence/judge-preflight-report.md` and `docs/evidence/judge-preflight-report.json`
- Date/time (UTC): `2026-04-30T23:41:34.797Z`
- Environment: `Windows 10 local workspace`
- `npm run validate:env`: `PASS`
- `npm run validate:evidence`: `PASS`
- `npm run test`: `PASS` (`30` passed, `1` skipped)
- `npm run typecheck`: `PASS`
- `npm run web:lint`: `PASS`
- `npm run web:typecheck`: `PASS`
- `npm run web:build`: `PASS`
- `npm run verify`: `PASS`
- `npm run judge:preflight`: `PASS` (`8` passed, `0` failed)
- If `npm run compile:policy` or `npm run demo:init` is run against the existing deployed `PolicyRegistry`, `policy_exists` can be an expected idempotency response. The repeatable judge path is `npm run judge:preflight`.
