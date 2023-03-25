
fetch("members.json")
  .then(response => response.json())
  .then(members => {
    const tableBody = document.getElementById("members-table-body");
    members.forEach((member) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.innerText = member.Name;
      const gradeCell = document.createElement("td");
      gradeCell.innerText = member.Grade;
      const domainCell = document.createElement("td");
      domainCell.innerText = member.Domain;
      const linkedInCell = document.createElement("td");
      const instagramCell = document.createElement("td");
      let hasInstagram = false; 
      member.Socials.forEach((social) => {
        if (social.linkedin) {
          const linkedInLink = document.createElement("a");
          linkedInLink.href = social.linkedin;
          linkedInLink.innerText = "LinkedIn";
          linkedInCell.appendChild(linkedInLink);
        }
        if (social.instagram) {
          const instagramLink = document.createElement("a");
          instagramLink.href = social.instagram;
          instagramLink.innerText = "Instagram";
          instagramCell.appendChild(instagramLink);
          hasInstagram = true;
        }
      });
      if (!hasInstagram) {
        const noInstagramCell = document.createElement("td");
        noInstagramCell.innerText = "doesn't not have Instagram";
        noInstagramCell.classList.add("no-instagram");
        instagramCell.appendChild(noInstagramCell);
      }
      row.appendChild(nameCell);
      row.appendChild(gradeCell);
      row.appendChild(domainCell);
      row.appendChild(linkedInCell);
      row.appendChild(instagramCell);
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error(error));
