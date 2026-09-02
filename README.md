# N5 Grammar Drill

A self-hosted quiz and flashcard site covering 33 JLPT N5 grammar points, split into a 7-day plan.
41 questions, 33 flashcards. Two static files, no build step, no external requests — once the page
loads it works offline, and scores are saved in the browser's local storage on each device.

## Deploy with Portainer (bind mount — simplest)

1. On the Docker host, make the directory and copy the three files in:

   ```
   sudo mkdir -p /opt/n5drill
   sudo cp index.html app.js default.conf /opt/n5drill/
   ```

2. In Portainer: **Stacks → Add stack → Web editor**, name it `n5drill`, paste the contents of
   `docker-compose.yml`, and deploy.

3. Check it: `http://<docker-host>:8088`

4. Point your subdomain at port 8088 in whatever reverse proxy you run. Notes for Nginx Proxy
   Manager and Traefik are at the bottom of the compose file.

To edit questions later, change `/opt/n5drill/app.js` on the host and hard-refresh — no rebuild,
no container restart.

## Deploy as a built image instead

If you'd rather bake the files into an image, use the included `Dockerfile`:

```
docker build -t n5drill .
docker run -d --name n5drill -p 8088:80 --restart unless-stopped n5drill
```

In Portainer you can also point a stack at a Git repo containing these files and let it build there.
That route means editing questions requires a rebuild, which is why the bind mount is the default.

## Editing the questions

Everything lives in the `DAYS` array at the top of `app.js`. One entry per day:

```js
{
  n: 1,                                   // day number
  theme: "Prohibition",                   // heading
  points: ["てはいけない", ...],           // shown on the home screen
  cards: [ {f:"front", m:"meaning", ex:"例文", en:"translation"} ],
  qs: [
    {
      p: "Question text in English",
      t: "大きな日本語",        // optional — large Japanese under the question
      o: ["option", "option", "option", "option"],
      c: 1,                     // index of the correct option, zero-based
      h: "optional hint",
      w: "why the answer is right"        // Japanese in here renders in mincho automatically
    }
  ]
}
```

`points` and `cards` should stay the same length — the home screen lists one against the other.

## Adding a day 8

Push a new object onto `DAYS` and the home screen picks it up. The only hardcoded seven is on the
results screen, where the "next day" button checks `d.n < 7`; bump that number if you extend the plan.
