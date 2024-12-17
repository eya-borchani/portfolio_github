document.getElementById('quiz-form').onsubmit = function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    let form = document.forms['quiz-form'];
    let summary = '';

    // Question 1
    let q1 = form['q1'].value;
    if (!q1) return alert('Veuillez répondre à la question 1.');
    summary += `1. Satisfaction des cours : ${q1} <br>`;

    // Question 2
    let q2 = form['q2'].value;
    summary += `2. Matière préférée : ${q2} <br>`;

    // Question 3
    let q3 = form['q3'].value;
    if (!q3) return alert('Veuillez répondre à la question 3.');
    summary += `3. Disponibilité des enseignants : ${q3} <br>`;

    // Question 4
    let q4 = form['q4'].value;
    if (!q4) return alert('Veuillez sélectionner un aspect pour la question 4.');
    summary += `4. Aspect préféré : ${q4} <br>`;

    // Question 5 (cases cochées)
    let q5Checked = [];
    for (let checkbox of form['q5']) {
        if (checkbox.checked) q5Checked.push(checkbox.value);
    }
    if (q5Checked.length === 0) return alert('Veuillez cocher au moins une case pour la question 5.');
    summary += `5. Points forts : ${q5Checked.join(', ')} <br>`;

    // Afficher les résultats
    document.getElementById('summary').innerHTML = summary;
    document.getElementById('result').style.display = 'block';
};

