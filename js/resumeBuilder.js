/*
This is empty on purpose! Your code to build the resume will go here.
 */

/**
 * CONSTANTS / Global
 */
var elem;
var DATA = '%data%';
var Header = function () { return $('#header'); };
var TopContacts = function () { return $('#topContacts'); };
var Skills = function () { return $('#skills'); };
var WorkExperience = function () { return $('#workExperience'); };
var Education = function () { return $('#education'); };

/*
 1. Bio
 */
var bio = {
    name: 'Ryan Larkyn',
    role: 'Game Developer',
    contacts: {
        mobile: '(325)-368-6237', // equates to 'fakenumber' using telephone keypad :D
        email: 'ryuhaswork@gmail.com',
        github: 'https://github.com/apt00100100/',
        twitter: '@ryanlarkyn',
        location: 'Seattle, WA'
    },
    welcomeMessage: '\"Space. It seems to go on and on forever. But then you get to the end and the gorilla starts throwing barrels at you.\"',
    skills: ['1 fish', '2 fish', 'red fish', 'blue fish'],
    biopic: 'http://thumbs.imagekind.com/3801081_650/Philip-J-Fry_art.jpg?v=1496337021'
};
/*
 2. Education
 */
var education = {
    schools: [
        {
            name: 'DeVry University',
            location: 'Tinley Park, IL',
            degree: 'B.S. in Game and Simulation Programming',
            majors: [],
            dates: '07/2006-10/2009',
            url: 'http://get-started.devry.edu/sem?ca.mp=GOOGLE&ab.sc=ps_adw_dvu_core-brand-desktop_208923_pfx&cmpid=ps_adw_dvu_core-brand-desktop_208923_pfx&vc=208923&ca.kw=devry%20university&ca.target=kwd-18871270&ca.cr=185576636817&ca.mt=e&cb.device=c&KWID=43700020317283642&sc_2=devry%20university&gclid=CjwKEAjwpdnJBRC4hcTFtc6fwEkSJABwupNi8cwAD7UG_Qglt3ojFaCEAgLIuBNAoFVxMJYtWynFzxoCy9_w_wcB&gclsrc=aw.ds'
        }
    ],
    onlineCourses: []
};
/*
 3. Work Experience
 */
var work = {
    jobs: [
        {
            employer: 'Apex Learning',
            title: 'Software Engineer',
            location: 'Seattle, WA',
            dates: '07/2014-present',
            description: 'Developing front end software for students, and building in-house tools.',
            url: ''
        },
        {
            employer: 'Wowzers!',
            title: 'Lead Game Developer',
            location: 'Chicago, IL',
            dates: '03/2011-04/2014',
            description: 'Lead on a team developing mini-games for elementary & middle school students as part of a curriculum.',
            url: ''
        },
        {
            employer: 'Applied Systems',
            title: 'Software Engineer',
            location: 'University Park, IL',
            dates: '02/2010-03/2011',
            description: 'Developed proprietary front-end applications for Insurance companies.',
            url: ''
        }
    ]
};

/**
 * HEADER
 * =================================
 */

var header = Header();
var topContacts = TopContacts();
var formattedName = HTMLheaderName.replace(DATA, bio.name);
var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
var formattedTwitter = bio.contacts.twitter ? HTMLtwitter.replace(DATA, bio.contacts.twitter) : '';
var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace(DATA, bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
// name & role
header.prepend(formattedRole);
header.prepend(formattedName);
// contact info
topContacts.append(formattedMobile);
topContacts.append(formattedEmail);
topContacts.append(formattedGithub);
topContacts.append(formattedTwitter);
topContacts.append(formattedLocation);
// biopic
header.append(formattedBiopic);
header.append(formattedWelcomeMsg);
// skills
header.append(HTMLskillsStart);
bio.skills.forEach(function (skill) { Skills().append(HTMLskills.replace(DATA, skill)); });
// HEADER (end) --------------------

/**
 * WORK EXPERIENCE
 * =================================
 */

// jobs
elem = WorkExperience();
work.jobs.forEach(function (job) {
    elem.append(HTMLworkStart);
    elem.append(HTMLworkEmployer.replace(DATA, job.employer).replace('#', job.url));
    elem.append(HTMLworkTitle.replace(DATA, job.title));
    elem.append(HTMLworkDates.replace(DATA, job.dates));
    elem.append(HTMLworkLocation.replace(DATA, job.location));
    elem.append(HTMLworkDescription.replace(DATA, job.description));
});
// WORK EXPERIENCE (end) ------------

/**
 * PROJECTS
 * =================================
 */

// PROJECTS (end) ------------------


/**
 * EDUCATION
 * =================================
 */

elem = Education();
education.schools.forEach(function (school) {
    elem.append(HTMLschoolStart);
    elem.append(HTMLschoolName.replace(DATA, school.name));
    elem.append(HTMLschoolDegree.replace(DATA, school.degree));
    elem.append(HTMLschoolDates.replace(DATA, school.dates));
    elem.append(HTMLschoolLocation.replace(DATA, school.location));

    school.majors.forEach(function (major) {
        elem.append(HTMLschoolMajor.replace(DATA, major));
    });
});
education.onlineCourses.forEach(function (onlineCourse) {
   // do stuff...
});

// EDUCATION (end) -----------------























