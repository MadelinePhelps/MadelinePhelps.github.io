---
layout: about
title: Home
permalink: /
subtitle: # <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

profile:
  align: right
  image: prof_pic.jpg
  alt: "Portrait of Madeline Phelps"
  image_circular: true # crops the image to make it circular
  more_info: > # <p></p> <p></p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

Hello! My name is Madeline Phelps, also called Maddy, and I am a Space Systems Engineer building hardware to enable space-based science.

I am currently a Research and Development Engineer at [ANTA Biotech](https://www.anta.bio/) developing gravity-agnostic automated sample preparation devices for the ISS. I recently graduated with an M.S. in Mechanical Engineering from UC San Diego, where I also received a B.S. in Aerospace Engineering. I built my design, prototyping, and manufacturing skills through advanced mission design at [NASA Jet Propulsion Laboratory](https://www.jpl.nasa.gov/), carbon fiber manufacturing R&D at [Collins Aerospace](https://www.collinsaerospace.com/what-we-do/industries/commercial-aviation/aerostructures/advanced-structural-materials), and liquid rocketry recovery design and test at [SEDS UCSD](https://www.sedsucsd.org/).

Outside of engineering you can find me riding my motorcycle, reading, learning how to embroider, or exploring the city around me!

Connect with me on [LinkedIn](https://www.linkedin.com/in/madeline-phelps) or reach out through [email](mailto:13.maddyphelps@gmail.com).

<a href="/assets/pdf/MadelinePhelps_Resume.pdf" class="btn btn-lg z-depth-1" target="_blank" rel="noopener">Resume (PDF)
</a>

<br>

<h3>Featured Projects</h3>

{% assign featured_projects = site.projects | where_exp: "p", "p.featured" | sort: "featured" %}
<div class="row row-cols-1">
  {% for project in featured_projects %}
    <div class="col mb-4">
      <a href="{{ project.url | relative_url }}">
        <div class="card h-100 hoverable">
          {% capture card_img_class %}card-img-top banner-img banner-card {{ project.banner_position }}{% endcapture %}
          {% include figure.liquid loading="eager" path=project.img sizes="380px" alt=project.img_alt class=card_img_class %}
          <div class="card-body">
            <h2 class="card-title">{{ project.title }}</h2>
            <p class="card-text">{{ project.year }}</p>
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<div class="text-center mt-3">
  <a href="{{ '/projects/' | relative_url }}" class="btn btn-lg z-depth-1">More Projects</a>
</div>
