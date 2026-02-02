var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "notes-section-1_1",
  "level": "1",
  "url": "notes-section-1_1.html",
  "type": "Worksheet",
  "number": "",
  "title": "Section 1.1 Notes",
  "body": " Section 1.1 Notes   A sequence is a function whose domain is a consecutive set of integers. The elements of the domain are called indices while the corresponding elements of the target are called terms .  Examples:    given by , , and      given by      Properties of Sequences:   Increasing    Non-decreasing    Decreasing    Non-increasing       Special Types of Sequences:     Geometric sequences    Arithmetic sequences      "
},
{
  "id": "notes-section-1_2",
  "level": "1",
  "url": "notes-section-1_2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Section 1.2 Notes",
  "body": " Section 1.2 Notes  A recurrence relation is a rule that defines a sequence by giving one or more terms at the beginning of the sequence and then defining later terms in the sequence in terms of earlier terms of the sequence.  Examples:   Geometric sequences:    Arithmetic sequences:     for      for     Fibonacci sequence: for      "
},
{
  "id": "activity-section-1_2",
  "level": "1",
  "url": "activity-section-1_2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Activity over Sections 1.1-1.2",
  "body": " Activity over Sections 1.1-1.2     Find the first four terms of each of the following sequences given by these explicit formulas:     for      for       Find the first four terms of each of the following sequences given by these recurrence relations:     , for      , for      , , for         Let for .    Find and .    Show that and     Show that for all integers with .      An employee joined a company in 2022 with a starting salary of $50,000. Every year this employee receives a raise of $500 plus 1%of the salary of the previous year.    Set up a recurrence relation for the salary of this employee years after 2022.    What will the salary of this employee be in 2027?        Suppose that is any positive integer. Let denote the number of different ways we can express as the sum of 1s and 2s. For example, since the number 3 can be expressed as the sum of 1s and 2s in 3 different ways:     What is ?    What is ?    What is ?    What is ?    What is your conjecture for what is for any ?    Use your conjecture to make a prediction for and then actually compute by finding all the ways to write 7 as the sum of 1s and 2s.     "
},
{
  "id": "activity-section-1_2-2-1",
  "level": "2",
  "url": "activity-section-1_2.html#activity-section-1_2-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Find the first four terms of each of the following sequences given by these explicit formulas:     for      for    "
},
{
  "id": "activity-section-1_2-2-2",
  "level": "2",
  "url": "activity-section-1_2.html#activity-section-1_2-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Find the first four terms of each of the following sequences given by these recurrence relations:     , for      , for      , , for    "
},
{
  "id": "activity-section-1_2-3-1",
  "level": "2",
  "url": "activity-section-1_2.html#activity-section-1_2-3-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let for .    Find and .    Show that and     Show that for all integers with .   "
},
{
  "id": "activity-section-1_2-3-2",
  "level": "2",
  "url": "activity-section-1_2.html#activity-section-1_2-3-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  An employee joined a company in 2022 with a starting salary of $50,000. Every year this employee receives a raise of $500 plus 1%of the salary of the previous year.    Set up a recurrence relation for the salary of this employee years after 2022.    What will the salary of this employee be in 2027?   "
},
{
  "id": "activity-section-1_2-4-1",
  "level": "2",
  "url": "activity-section-1_2.html#activity-section-1_2-4-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Suppose that is any positive integer. Let denote the number of different ways we can express as the sum of 1s and 2s. For example, since the number 3 can be expressed as the sum of 1s and 2s in 3 different ways:     What is ?    What is ?    What is ?    What is ?    What is your conjecture for what is for any ?    Use your conjecture to make a prediction for and then actually compute by finding all the ways to write 7 as the sum of 1s and 2s.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
