# Data

When in doubt, check for an existing event on the [website](https://itenium.be/Competence-Center/events)
and copy how it's done for a fully completed event.


## events.yml

A dash (`-`) before name, and two spaces before the other keys.
Use a [validator](https://www.yamllint.com/) to make sure the Yaml is valid.


```yaml
- name: "Name of the event"
  subTitle: "Funny, clever, or something, subtitle"
  date: YYYY-MM-DD
  summary: >
     Longer description, look for the best text in a few places:
     The description in the calendar meeting invite, the text used
     for the LinkedIn post, ...
     <br><br>Use `<br>` for adding newlines to the summary.

  # track options:
  # TechEvent, FrontendTrack, ArchitectureTrack, FunEvent, CloudTrack, QAEvent, TechCafe
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
  image: "/assets/images-events/dont-make-me-think.jpg"
  gallery:
    - "img1"
    - "img2"

  # Links to the socials
  linkedIn: ""
  instagram: ""
  twitter: ""
  githubUrl: ""
  blogPost: ""

# Decide whether the cover image of video is to be used
- If the video is to be used as cover image, then it's OK as it
- If there is no video or the video is not to be used as cover image, remove the best picture from the gallery and use that as image

```

Create a PR with the new images AND the changes to the Yaml.
After creating the PR:
- Check the Yaml manually one more time (valid, correct)
- Check the images manually one more time (names, sizes)
- Hold the PR against this checklist

 # Notice the green cirlce
- Green circle: build is busy
- Green V : build succeeded, new yaml is visible on the website
- Red X : build failed, probably invalid Yaml
