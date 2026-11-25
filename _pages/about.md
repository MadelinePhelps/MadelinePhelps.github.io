---
layout: about
title: Home
permalink: /
subtitle: # <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
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

I am currently a Research and Development Engineer at [ANTA Biotech](https://www.anta.bio/) working on developing gravity agnosstic sample preparation devices for the ISS. I recently graduated with an M.S. in Mechanical Engineering from  UC San Diego where I also received a B.S. in Aerospace Engineering. I have hands-on experience in design, prototyping, and manufacturing stemming from my experience in advanced mission design at [NASA Jet Propulsion Laboratory](https://www.jpl.nasa.gov/), carbon fiber manufacturing R&D at [Collins Aerospace](https://www.collinsaerospace.com/what-we-do/industries/commercial-aviation/aerostructures/advanced-structural-materials), and [SEDS UCSD](https://www.sedsucsd.org/).

Outside of engineering you can find me riding my motorcycle, reading, learning how to embroider, or exploring the city around me!

Connect with me on [LinkedIn](https://www.linkedin.com/in/madeline-phelps) or reach out through [email](mailto:13.maddyphelps@gmail.com).

<a href="/assets/pdf/MadelinePhelps_Resume.pdf" class="btn btn-lg z-depth-1" target="_blank" rel="noopener">Resume (PDF)
</a>

<br>

<h3>Projects</h3>
Check out some of the projects I have done! Click on a project to see more detail.

---

 <div class="centered">
<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
</div>

<br>
