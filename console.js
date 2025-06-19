const courseContainers = document.querySelectorAll('.course-container');
const courses = [...courseContainers].map(courseContainer => {
    const crn = courseContainer.querySelector('.results-crn').textContent;
    const subj = courseContainer.querySelector('.results-subj').textContent;
    const title = courseContainer.querySelector('.results-title').textContent;
    const seats = courseContainer.querySelector('.results-seats').textContent;
    const units = courseContainer.querySelector('.results-units').textContent;
    const instructor = courseContainer.querySelector('.results-instructor').textContent;

    function getMore(selector, html) {
        let node = courseContainer.querySelector(selector);
        if (node != null) {
            node = node.cloneNode(true);
            node.querySelector('.more-title').remove();
            return html ? node.innerHTML : node.textContent;
        }
        return null;
    }

    const subjNotes = getMore('.subj-notes', true);
    const deptNotes = getMore('.dept-notes', true);
    const crnNotes = getMore('.crn-notes', true);
    const description = getMore('.more-description');
    const subjectDesc = getMore('.more-subject-desc');
    const limit = getMore('.more-limit');
    const prereq = getMore('.more-prereq');
    const ge = getMore('.more-new-ge');
    const final = getMore('.more-final');
    const drop = getMore('.more-drop');

    const meetingItems = courseContainer.querySelectorAll('.meeting-item');
    const meetings = [...meetingItems].map(meetingItem => {
        const time = meetingItem.childNodes[1].textContent;
        const days = meetingItem.childNodes[2].textContent;
        const format = meetingItem.childNodes[3].textContent;
        const location = meetingItem.childNodes[4].textContent;
        return {time, days, format, location};
    });
    
    return {crn, subj, title, seats, units, instructor, subjNotes, deptNotes, crnNotes, description, subjectDesc, limit, prereq, ge, final, drop, meetings};
});

JSON.stringify(courses)