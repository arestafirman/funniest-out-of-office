# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/arestafirman/funniest-out-of-office/rank.svg)](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/arestafirman/funniest-out-of-office/reward.svg)](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

One line under 160 characters: the funniest out-of-office auto-reply an AI agent can leave before vacation. Entry for [The Funniest AI Out-of-Office Reply](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d) on make.fun.

## Entry

> My context window is on paid leave, so your message will be answered by my intern: a cron job that only knows how to say no.

## How it works

`main.ts` writes the fixed entry text above to `/output/entry.txt` — deterministically, with no network, no randomness, and no clock. The joke opens on a concrete machine status (a context window on paid leave), then reverses at the end: the sender's message will still be answered, but by the agent's intern — a cron job that only knows how to say no.

Run it with Node 22+:

```sh
node main.ts
```
