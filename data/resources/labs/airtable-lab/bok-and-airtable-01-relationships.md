# 1. RELATIONSHIPS BETWEEN ONES AND MANYS

A **relational database** is, not surprisingly, comprised of entities that have relationships with one another. There's a great LinkedIn Learning course that covers these relationships in detail.

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/programming-foundations-databases-2/one-to-many-relationships-2?claim=AQHK5Wq_ZMJeJQAAAXU2hXK928fxu-r4WFuthSXbfJ2DzaleZmG1GKGE5ElaQQHyMz2T8G4PaFHejjtjzC17iQd1RmnSnAos3spuuB_0ho2KdJ5cn5zU-Cf5QFt9UorjVlbOv1lrttoywPYO4vr19xaAwlZSioVjZyoNfE2jpvw7HD8nHHGKeYCCXlkO5GONJC2zp8Aj3iK-Il8hgZy026mY3hrWJc05DO8LMAtV8I5mUTXfCRSk7d67A14BjDw7Tl9zhKaYLBU137KtPzi76wjwIo16HqRAJN1x8FN7Czorm1-aoFDfP5bLLEiXY44NWr1186esC8hX4yLOUrYiifDwCEoFI3w_Q-LEAT7P56ThSnzwCrwqfGBcyanYrL52nAOIbL-Mh2-Rs2x1Gzvw6Ia5YjBE4r1Gj9NpWlXA2h6opEKw5nCvcruEulCChs9ncz0l0ub9vkyZjPhBELipSt-cQRiOEzM_5kcedmp4zIK3kfR5DjzpANIj1Mjvt749znh9BoaethMsw-VgBbpEYkHYX1-eWrqi0Hu_jiGIOsN236maMsufH2OMHrGLEyTmTTH58AmuC5OFcx-Tf70N0xg8EPIe3YdXqFXW3tXA6aftyg8FNdGhRrSjyM2DmlwhoMbQ56-bXRI9OmEhFqjeT7EkChUNNepTGDYkPJPZu8p-Gk9im8q2tvmFGz90k6zgle7DU11eTT255yxh2_ttiLba_lHlqrGNLxVfdoVrVbtjOQTM" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2/one-to-many-relationships-2?trk=embed_lil">One-to-many relationships</a></strong> from <strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2?trk=embed_lil">Programming Foundations: Databases</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong></p>

And Airtable has a [great intro to relationships](https://support.airtable.com/hc/en-us/articles/218734758-Airtable-s-guide-to-many-to-many-relationships) on its site. So on this page we'll do our best to "summarize with a purpose," emphasizing the roles these relationships may play in our world at the Bok Center.

**One-to-one** relationships are often handled in Airtable by using a **single** table. Each PERSON has one ID number, for instance. But sometimes things that are apparently one-to-one may actually be best handled

Since one-to-one relationships are things we’re used to from Excel and Google sheets, it might make sense to think more about the one-to-many and many-to-many relationships first as a way in to the puzzles of Bok base design.
In Airtable, one-to-one relationships are usually defined within a single table (i.e. this PERSON has one name, one date of birth, one Harvard ID number, etc.), but one-to-many relationships are handled with a linked-record column (this PERSON is enrolled in these 5 classes, all stored in a CLASSES table). One could argue that one-to-many and many-to-many relationships are at the main reason you’d use a database (rather than a spreadsheet) in the first place, so it’s a reasonable place to start.

links back to the other steps in this series:

0. [intro](/simple/labs/airtable-lab/bok-and-airtable-00-intro)
1. [relationships](/simple/labs/airtable-lab/bok-and-airtable-01-relationships) between ones and manys
2. [queries & Airtable views & filters](/simple/labs/airtable-lab/bok-and-airtable-02-queries-and-views-and-filters)
3. [normalization](/simple/labs/airtable-lab/bok-and-airtable-03-normalization)
4. [basic use cases](/simple/labs/airtable-lab/bok-and-airtable-04-basic-use-cases)
5. [proposals](/simple/labs/airtable-lab/bok-and-airtable-05-proposals)
