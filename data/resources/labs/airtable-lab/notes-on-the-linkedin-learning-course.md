# NOTES ON THE LINKEDIN COURSE

this is just a spot for us to type up notes on the [LinkedIn Learning course we're watching](https://www.linkedin.com/learning/programming-foundations-databases-2/why-use-a-database?u=2194065).

## 0. INTRODUCTION

### [WHY USE A DATABASE?](https://www.linkedin.com/learning-login/share?forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fprogramming-foundations-databases-2%3Ftrk%3Dshare_ent_url&account=2194065)

0:29 => *"these are found in many places from banking and order applications to mobile apps, etc."*

It's really key to point out that databases are EVERYWHERE -- so it's almost harder to figure out something they're NOT good for than the reverse.

Every experience you have on the internet that feels large and unbounded -- shopping for [necessities](https://www.amazon.com/Colors-Rainbow-Netting-Fabric-Ribbon/dp/B07JLMJ18T/ref=sr_1_7?dchild=1&keywords=tulle&qid=1603136145&sr=8-7) on Amazon, hopping from [clip](https://www.youtube.com/watch?v=SwYN7mTi6HM) to [clip](https://www.youtube.com/watch?v=oRdxUFDoQe0) to [clip](https://www.youtube.com/watch?v=ZcJjMnHoIBI) on Youtube, checking out [Maine yurts on AirBnb](https://www.airbnb.com/rooms/7671036?source_impression_id=p3_1603135168_zFd%2BklO3HPNGAPeP) -- all of these experiences are rendered possible by databases.

And what's cool, from a teaching and learning perspective, is that if the database as a form is capable of encoding a world as complex as Amazon's system of products, or YouTube's web of videos, or AirBnB's [better-as-an-idea-than-in-reality, hipster-targeting "experiences"](https://www.airbnb.com/experiences/1236954?currentTab=experience_tab&federatedSearchId=3568a7be-d026-448b-96d7-2e11e8b5cd93&searchId=&sectionId=4a148d0e-1e8d-4a45-ba55-041983c4dbea&source=p2), then I think one could argue that it's the perfect medium for academic work.

And, obviously, databases are already used across most of Harvard's disciplines for *research* . . . but what might it look like as a *teaching and learning tool?*

### [WHAT YOU SHOULD KNOW](https://www.linkedin.com/learning/programming-foundations-databases-2/what-you-should-know?u=2194065)

talking about databases in general, not specifics. This is good for us, because Airtable isn't all that much like an SQL DB from a user's perspective.





## 1. DATABASE FOUNDATIONS


### [RELATIONAL DATABASES](https://www.linkedin.com/learning/programming-foundations-databases-2/relational-databases-2?resume=false&u=2194065)

### [KEYS AND UNIQUE VALUES](https://www.linkedin.com/learning/programming-foundations-databases-2/keys-and-unique-values-2?resume=false&u=2194065)

The part about unique values in tables is interesting, because in our airtable bases, we tend to use formulas nade of concatentating other attributes in two or more columns.

QUESTION: do we think of the key as that first field? or as the Airtable Record ID?

### [ACID AND TRANSACTIONS](https://www.linkedin.com/learning/programming-foundations-databases-2/acid-and-transactions-2?resume=false&u=2194065)

note: getting into specifics, kind of a glance "under the hood"of databases. good to know as a reference, but info about ACID and CRUD and communicating with the database through SQL are mostly taken care of for us by airtable's gooey ui/ux.

question: but do we change this when we start adding automations and external data?

### [BASIC SQL](https://www.linkedin.com/learning/programming-foundations-databases-2/basic-sql?resume=false&u=2194065)

not necessarily relevant for us?

Though it is interesting to compare and contrast SQL queries and Airtable Views and Filters.
* Views are for sure easier to grasp, but "feel" more static and permanent than a line of code that you type once.
* Also I suppose that code-like queries are possible in the scripting blocks you can add
* Views are restricted to a table, and any queries spanning multiple tables are "built in" from advance, because you need to have added a column that links to another table

Like this sample query code to list out customer orders (data which exists across two tables: one for customers, one for orders) would be done with a column in customers that links to orders (and vice versa), then a filter in customers to show only customers with orders:
```
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```

If for some reason we want to be able to create

### EXTRA NOTES & QUESTIONS





And here it gives us [a good overview of relationships](https://www.linkedin.com/learning-login/share?forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fprogramming-foundations-databases-2%3Ftrk%3Dshare_ent_url&account=2194065).

## 2. TABLES

### [MODELING AND PLANNING A DATABASE](https://www.linkedin.com/learning/programming-foundations-databases-2/modeling-and-planning-a-database?resume=false&u=2194065)

This feels like a good step for us to think about performing for Bok (coming up with a list of all the entities at Bok we want to track, the properties of these entities we might care about, and then some relationships between these entities).

Capitalization conventions = Capitalize table names, upper-CamelCase (PascalCase) field names.

Avoid using spaces in field names.

### NAMING TABLES

Simple notes: tables should be labeled with the plural of the object they track.

### COLUMNS AND DATA TYPES

Airtable offers us different options than the ones he lists, but it's still good to check these out.

Q: is it true that the only difference between long and short text fields on airtable is in the view? or are they really stored differently? (like `VARCHAR(50)` or `TINYTEXT` vs `LONGTEXT`?)


### NUMBERS AND OTHER TYPES

note: in AT, the date is a date object rather than a string, meaning that you can manipulate the way you view it down the line


### PRIMARY AND FOREIGN KEYS

In Airtable, the primary key is the recordID, but this is hidden from you by default. Would we ever want to make this visible in a convenience column by default in every Main Base we create?

## 3. RELATIONSHIPS

One-to-many most common relationship used

Use primary key to represent data (it never changes and is unique) when creating relationships

One-to-one is not commonly used. Often used to protect secure information.

## 4. DATABASE OPTIMIZATION
