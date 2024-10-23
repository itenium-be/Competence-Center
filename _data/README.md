# Data

When in doubt, check for an existing event on the [website](https://itenium.be/Competence-Center/events)
and copy how it's done for a fully completed event.


## events.yml

A dash (`-`) before name, and two spaces before the other keys.
Use a [validator](https://www.yamllint.com/) to make sure the Yaml is valid.


```yaml
- name: "Name of the event"
  by: "ConsultantName"
  subTitle: "Funny, clever, or something, subtitle"
  date: YYYY-MM-DD
  summary: >
     Longer description, look for the best text in a few places:
     The description in the calendar meeting invite, the text used
     for the LinkedIn post, ...
     <br><br>Use `<br>` for adding newlines to the summary.

  # Hidden events are not displayed once their date has passed
  # This is to avoid displaying an event in the past without any details added to it
  # When adding the details to the event, remove this property!
  hide: true

  # track options:
  # TechEvent, FrontendTrack, ArchitectureTrack, FunEvent, CloudTrack, QAEvent, TechCafe
  # JavaTrack, DotNetTrack, Bootcamp
  # For a FunEvent/TechCafe, typically content, type & level can be deleted
  track: "CloudTrack"

  # content options:
  # Hands-On, Code-Show, Theoretical, Bootcamp, Demos, SoftSkill
  content: "Theoretical"

  # type options:
  # Short, On-Site, exercisesAtTheEnd, Virtual
  type: ["exercisesAtTheEnd", "Virtual"]

  # level options:
  # Introduction, Intermediate, Expert
  level: Introduction

  # Use format 1h30m round to "10" (ie 48 -> 50m)
  # The duration is the duration of the TL&DV video
  duration: "3h"

  # A custom video, this is always a link to Youtube
  # Upload the video (for example the one used for LinkedIn) to the itenium YT channel
  # Then paste the Share > Embed link here
  video: ""

  # The cover image
  # All images should be resized to a max width of 1024px
  # All images should be put in the folder assets/images-events
  # All images should be in a normal format (like jpg or png)
  # Filenames should be prefixed with the name of the event
  # Filenames should not contain spaces or other special characters (use dashes)
  # There should be either a video or an image to be used as the cover image.
  # If there is no video and no image: use the "best" picture from the gallery.
  # Ensure that if an image is removed later, the corresponding file is also deleted.
  image: "/assets/images-events/dont-make-me-think.jpg"
  gallery:
    - "img1"
    - img: "img2"
      alt: "if there is only generic AI generated text, use alt"
      title: "optional title if there is also a text"
      text: "if there is hand-written text, use this instead of alt"

  # Links to the socials
  linkedIn: ""
  instagram: ""
  twitter: ""
  blogPost: ""
  facebook: ""

  # For all non FunEvent/TechCafes there is **always** a Github repository
  githubUrl: ""

  # The link to the TL&DV video recording
  tldv: ""
```
Create a PR with the new images AND the changes to the Yaml.
After creating the PR:
- Check the Yaml manually one more time (valid, correct)
- Check the images manually one more time (names, sizes)
- Hold the PR against this checklist

### Additional Information

- Paste all content from ChatGPT into the summary.
- Ensure the summary shuns all fluff and focuses on key points.
- Make the summary concise and suitable for formal communication, such as a social media post.
- Review the summary for clarity and relevance before finalizing.
- Ensure that new sessions always have an associated GitHub repository.
- Verify that a PowerPoint (PPTX) is created for each new session.
- Confirm that the PPTX specifies the Level and Track of the session.
- Ensure the agenda item specifies whether the session is virtual or on-site.
- If the session is virtual, ensure the TL&DV includes the exact duration.
- If the session is on-site, default the duration to 4 hours.
- Review and validate the Content to ensure it aligns with the session's objectives and requirements.
- When it's posted on the socials, update the YAML with the social links.
- Always remove the letters and characters after the "?" in LinkedIn URLs to ensure they work on both phone and PC.
- For the YAML, everything is case-sensitive! Always verify that everything works correctly.

### Publish

After a merge, you can see the current build/deploy status on the
[main page](https://github.com/itenium-be/Competence-Center).

- Green circle: build is busy
- Green V: build succeeded, new yaml is visible on the website
- Red X: build failed, probably invalid Yaml


## Template

```yaml
- name: ""
  by: ""
  subTitle: ""
  date: 2024-09-01
  hide: true
  track: ""
  summary: >

  level: Introduction
  content: "Theoretical"
  type: ["Virtual"]
  duration: "2h"
  video: ""
  image: ""
  gallery:
    - ""
    - img: ""
      alt: ""
      title: ""
      text: ""
  linkedIn: ""
  instagram: ""
  twitter: ""
  githubUrl: ""
  blogPost: ""
  facebook: ""
  tldv: ""
```
