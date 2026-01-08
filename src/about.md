---
layout: base.njk
title: About Us
---

# About the {{ site.name }}

The McMinn County Amateur Radio Club, Inc. serves amateur radio operators in McMinn County and the surrounding area. The club maintains a club station at the Athens EOC with club call **{{ site.callsign }}**.

Additional non-club stations are located at:
- McMinn County 911 Center
- Athens Regional Hospital
- Woods Memorial Hospital

## Club Officers ({{ members.year }})

<table>
  <thead>
    <tr>
      <th>Position</th>
      <th>Name</th>
      <th>Callsign</th>
    </tr>
  </thead>
  <tbody>
    {%- for officer in members.officers %}
    <tr>
      <td>{{ officer.position }}</td>
      <td>{{ officer.name }}</td>
      <td class="callsign">{{ officer.callsign }}</td>
    </tr>
    {%- endfor %}
  </tbody>
</table>

## Meetings

<div class="meeting-info">
  <h3>Regular Club Meetings</h3>
  <p><strong>{{ site.meeting.day }}</strong> at <strong>{{ site.meeting.time }}</strong></p>
  <p>{{ site.meeting.location }}<br>{{ site.meeting.address }}</p>
  <p>Everyone is welcome to attend!</p>
</div>

## Contact Information

- **Phone:** {{ site.phone }} ({{ site.contact }})
- **Email:** [{{ site.email }}](mailto:{{ site.email }})
- **Facebook:** [{{ site.shortName }}]({{ site.facebook }})

## Facebook Groups

Join us on Facebook for discussions and support:

- [MCARC Main Facebook Page](https://www.facebook.com/mcminnamateurradio) — Follow us via Facebook to stay up to date with the latest club info
- [MCARC Elmers Corner](https://www.facebook.com/groups/2467262400227869/) — Get help from experienced hams
- [MCARC Digital Modes](https://www.facebook.com/groups/173947463838722/) — Discussions about digital amateur radio modes
