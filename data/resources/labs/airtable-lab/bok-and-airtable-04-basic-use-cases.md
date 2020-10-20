# 4. BASIC USE CASES

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

`=> PERSON` (from People table in Central base)

Department ( lookup )

Full_Name ( lookup )

Email ( lookup )

Date_Created

LL_Projects ( => LL_PROJECT [multi] )

**LL_PROJECT**

Title

Client ( => CLIENT )

###

links back to the other steps in this series:

0. [intro](/simple/labs/airtable-lab/bok-and-airtable-00-intro)
1. [relationships](/simple/labs/airtable-lab/bok-and-airtable-01-relationships) between ones and manys
2. [queries & Airtable views & filters](/simple/labs/airtable-lab/bok-and-airtable-02-queries-and-views-and-filters)
3. [normalization](/simple/labs/airtable-lab/bok-and-airtable-03-normalization)
4. [basic use cases](/simple/labs/airtable-lab/bok-and-airtable-04-basic-use-cases)
5. [proposals](/simple/labs/airtable-lab/bok-and-airtable-05-proposals)
