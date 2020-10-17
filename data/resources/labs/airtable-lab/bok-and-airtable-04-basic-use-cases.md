# 4. BASIC USE CASES #



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
