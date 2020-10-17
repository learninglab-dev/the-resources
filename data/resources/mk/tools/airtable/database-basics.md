# AIRTABLE DESIGN IDEAS #

This doc can start out as a combination of a intro to some database basics AND a way to plan out some of the basics of our specific database.

1. relationships between ones and manys
2. queries
3. normalization
4. basic use cases
5. proposals


## ONES AND MANYS

**One-to-one** relationships are often handled in Airtable by using a **single** table. Each PERSON has one ID number, for instance. But sometimes things that are apparently one-to-one may actually be best handled 

Since one-to-one relationships are things we’re used to from Excel and Google sheets, it might make sense to think more about the one-to-many and many-to-many relationships first as a way in to the puzzles of Bok base design.

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/programming-foundations-databases-2/one-to-many-relationships-2?claim=AQHK5Wq_ZMJeJQAAAXU2hXK928fxu-r4WFuthSXbfJ2DzaleZmG1GKGE5ElaQQHyMz2T8G4PaFHejjtjzC17iQd1RmnSnAos3spuuB_0ho2KdJ5cn5zU-Cf5QFt9UorjVlbOv1lrttoywPYO4vr19xaAwlZSioVjZyoNfE2jpvw7HD8nHHGKeYCCXlkO5GONJC2zp8Aj3iK-Il8hgZy026mY3hrWJc05DO8LMAtV8I5mUTXfCRSk7d67A14BjDw7Tl9zhKaYLBU137KtPzi76wjwIo16HqRAJN1x8FN7Czorm1-aoFDfP5bLLEiXY44NWr1186esC8hX4yLOUrYiifDwCEoFI3w_Q-LEAT7P56ThSnzwCrwqfGBcyanYrL52nAOIbL-Mh2-Rs2x1Gzvw6Ia5YjBE4r1Gj9NpWlXA2h6opEKw5nCvcruEulCChs9ncz0l0ub9vkyZjPhBELipSt-cQRiOEzM_5kcedmp4zIK3kfR5DjzpANIj1Mjvt749znh9BoaethMsw-VgBbpEYkHYX1-eWrqi0Hu_jiGIOsN236maMsufH2OMHrGLEyTmTTH58AmuC5OFcx-Tf70N0xg8EPIe3YdXqFXW3tXA6aftyg8FNdGhRrSjyM2DmlwhoMbQ56-bXRI9OmEhFqjeT7EkChUNNepTGDYkPJPZu8p-Gk9im8q2tvmFGz90k6zgle7DU11eTT255yxh2_ttiLba_lHlqrGNLxVfdoVrVbtjOQTM" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2/one-to-many-relationships-2?trk=embed_lil">One-to-many relationships</a></strong> from <strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2?trk=embed_lil">Programming Foundations: Databases</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong></p>

In Airtable, one-to-one relationships are usually defined within a single table (i.e. this PERSON has one name, one date of birth, one Harvard ID number, etc.), but one-to-many relationships are handled with a linked-record column (this PERSON is enrolled in these 5 classes, all stored in a CLASSES table). One could argue that one-to-many and many-to-many relationships are at the main reason you’d use a database (rather than a spreadsheet) in the first place, so it’s a reasonable place to start.

### NORMALIZATION ###


<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/programming-foundations-databases-2/first-normal-form?claim=AQFusr-MCuOKYAAAAXU2iFCsigCkbiI1HKMtH2JIpQOv9b52Z6-EkkX8E9j5XBawgZMYcfp1oQRC5kV_99oNh186oJfw8ORuEiN7fZNuO43ha953PEvV9YNSv_FRewf5-Q50LBUUhVRuUnBUlEqGFxzj1xlSSy-xmWe1QLh7QuaEnMru-bI9gSNxpsqIqzc8iDTPtlroT_iSR7q02V4-nnAwp76F-wIk0MDwQDgp_25HO5Mdd3yjvcsDYj7evL3RvRxhZsb4jXca0x1gVH68ioAfB082WVai0luJH85LzSCPz41c-v7RcN7ss2a_0fRqb72fb8HG9GYWyyA1hL_nBqT6LP4BT_gxcq4bzieLL3Xe5wLKXpSqqkkSyxJFoGXZXoS5tk_ML_0gx4yIiSYe2ZMYxWYUlSHSOF1-jNokOUzz3yCu4Cen1YjDqcoYgAM0tJi_XszT9X0DSUmdBvBa34_r0tVCEHPJTc0AhbYKf793IO8fgUon-PJcLlr03jpLQmQDQB6uF6BamUCt6kDGMPEMkhLdRMYvnCwp1kdT0qUNlS8qZYJSlqcv0XSkdSpT7fXqQIPY8-iKGKzES07UEHnFyPIv4fzVcr17w_gxDHokfcil0cHVhxUwVZ8z-YRznvXNhxIE3S10KnjwV1QzzQ6jWX3vw-42tLHL0RPhYzB3lar1fAM5AC82R8KX9lVufaxUaClcSmdmLpt212rG64Pe7bt8-jaN63EPyDug7CH8ozmU" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2/first-normal-form?trk=embed_lil">First normal form</a></strong> from <strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2?trk=embed_lil">Programming Foundations: Databases</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong></p>






### Central

all the objects that EVERYONE wants to reference across all bases . . . in general, this is NOT where work is tracked. These are more the fixed things (departments, people, courses) that constitute the unchanging facts in our ontology.

**PERSON**

Last_Name

Full_Name

University_ID

Role

Email

Department ( => DEPARTMENT )

Courses ( => COURSE [multi] )

**COURSE**

Course_ID

Title

Department ( => DEPARTMENT )

Instructor ( => PERSON )

Enrollment


### Admin

for the projects that the admin team typically tracks (currently) in their Google sheets, etc. . . . Library Books, appointment data (?), budget?, 

**BOOK**

Title

Author

Location

**APPOINTMENT**

?


### Team 1

all the Team 1 work


### TEAM 2

all the Team 2 work

`CLIENT`

 `=> PERSON ` (from People table in Central base)

Department ( lookup )

Full_Name ( lookup )

Email ( lookup )

Date_Created

LL_Projects ( => LL_PROJECT [multi] )

**LL_PROJECT**

Title

Client ( => CLIENT )


### 


## APPENDIX 2: LINKS

just some random stuff from the internet that’s useful.


### ON DATABASE DESIGN



*   LinkedIn Learning course on [Learning Relational Databases](https://www.linkedin.com/learning/learning-relational-databases-2/database-management-systems-dbms?u=2194065), including videos on relationships, [normalization](https://www.linkedin.com/learning/learning-relational-databases-2/first-normal-form?u=2194065), etc.
*   A **_better_** LinkedIn Learning course, [Programming Foundations: Databases](https://www.linkedin.com/learning/programming-foundations-databases-2/why-use-a-database?u=2194065).


### ON AIRTABLE



*   [airtable pivot tables](https://support.airtable.com/hc/en-us/articles/115013249307-Pivot-table-block)
*   [airtable chart app](https://support.airtable.com/hc/en-us/articles/115013248487-Chart-block)
*   [building apps](https://support.airtable.com/hc/en-us/articles/360021502434)
*   [combining multiple tables into one table with multiple views](https://support.airtable.com/hc/en-us/articles/360007520454-Combining-multiple-tables-into-one-table-with-multiple-views)
*   [airtable's guide to many-to-many relationships](https://support.airtable.com/hc/en-us/articles/218734758-Airtable-s-guide-to-many-to-many-relationships)


## QUERIES ##

This is where we encounter one of the things that makes Airtable awesome. We don't even NEED to learn to query things using SQL-style queries like 
<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/programming-foundations-databases-2/joining-tables?claim=AQGOkTzxGFKWawAAAXU2lj2aJQg8VuGBUlxD03wpdO-YKdKhwIrqbmnxnu_RlONvE2XkO_vWfbWlOTqRulljzdqzybGYZW_ymfpCzeH_8bYmkZWSc28Y1fzc9hZF931TmKZj5MGvUb4kf99X28_5Y_9B7l4q55kiv_-cPSIVFUJ8bWa298tl7a30m-he6W2A-MOBzbEnFdW9ufE-Lx0V3z888CLNx79PsEGwUmf3YsAGe_mZowxMX136Foh4b_hSfAegXqzJ1nbl0LNT3fbTprJeVgG13AaX_isKdZ37cCW3McrAtqqTFQIfsN1igztDUiE_lyDfL64i_WvlZYtH3Mk-34RQyizUv5TiQhdXx_Td1xRwZVL7ayDnGqhkuMoNZ3dDgW20Q00y10eiXIVhPP_f9JFeENQmfygEYF3D9j9kr-LXhlqDqvsNTarP0tF9Zp9qgw_AAEopYn6RcNcXvvNCpNpscYGX3sxnF_vnSSXx63ROgbrc8KzIN-crySwy7hoC2C8D874VxwIhZXFF5-EjhhYVByNAOTeO0eLob2ZI_j719IeB8VotN474CWmdxWKLdxTpmR_1uV-tuxNUXfofvk76BEujRwvIHGdjc97kjmIQmQ82nJmSuf0nQ1ezwIcnuGso2-xoJw5VfbQdK0XbxnPHTRUb8Dyel4muzZbzg74TFG7QsAlJbkrbiHE5lhXQ03sK4lTdKewXUxCpAecGMDyPmHgMYEb3L6EPi7PUoMWl" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2/joining-tables?trk=embed_lil">Joining tables</a></strong> from <strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2?trk=embed_lil">Programming Foundations: Databases</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong></p>


