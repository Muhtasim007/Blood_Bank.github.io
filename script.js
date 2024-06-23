document.addEventListener('DOMContentLoaded', function () {

    // Donor registration form submission
    const donorForm = document.getElementById('donorForm');
    if (donorForm) {
        donorForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(donorForm);
            const donor = {
                name: formData.get('name'),
                age: formData.get('age'),
                gender: formData.get('gender'),
                bloodType: formData.get('bloodType'),
                contact: formData.get('contact')
            };
            donors.push(donor);
            alert('Donor registered successfully!');
            donorForm.reset();
        });
    }

    // Recipient registration form submission
    const recipientForm = document.getElementById('recipientForm');
    if (recipientForm) {
        recipientForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(recipientForm);
            const recipient = {
                name: formData.get('name'),
                hospital: formData.get('hospital'),
                bloodType: formData.get('bloodType'),
                contact: formData.get('contact')
            };
            recipients.push(recipient);
            alert('Recipient registered successfully!');
            recipientForm.reset();
        });
    }

    // Appointment scheduling form submission
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(appointmentForm);
            const appointment = {
                recipientName: formData.get('name'),
                bloodType: formData.get('bloodType'),
                date: formData.get('date'),
                time: formData.get('time')
            };
            appointments.push(appointment);
            alert('Appointment scheduled successfully!');
            appointmentForm.reset();
        });
    }

  
    // Update blood inventory table on inventory.html
    const bloodInventoryTable = document.getElementById('bloodInventory');
    if (bloodInventoryTable) {
        Object.keys(bloodInventory).forEach(bloodType => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${bloodType}</td>
                <td>${bloodInventory[bloodType]}</td>
            `;
            bloodInventoryTable.appendChild(row);
        });
    }

    // Admin login functionality
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(adminLoginForm);
            const username = formData.get('username');
            const password = formData.get('password');
            // Basic authentication (dummy)
            if (username === 'Muhtasim007' && password === 'C221186') {
                alert('Login successful!');
                window.location.href = 'dashboard.html'; 
            } else {
                alert('Invalid login credentials!');
            }
        });
    }
});

// Functionalities for Blood Unit Adding and Removing

function incrementUnitAp() 
{

    let result = 

        document.getElementById("units-A+").value;
    try {
        
        result = ++result;
        document.getElementById("units-A+").
        value = result;
    } catch (error) {
        document.getElementById("units-A+").
        value = "Error";
    }

}

function decrementUnitAp() 
{

    let result = 

        document.getElementById("units-A+").value;
    try {
        if(result > 0){
        result = --result;
        document.getElementById("units-A+").
        value = result;
        }
        else 
        document.getElementById("units-A+").
        value = 0;
        
    } catch (error) {
        document.getElementById("units-A+").
        value = "Error";
    }

}

function decrementUnitABP() 
{

    let result = 

        document.getElementById("units-ABP").value;
    try {
        if(result > 0){
            result = --result;
            document.getElementById("units-ABP").
            value = result;
            }
            else 
            document.getElementById("units-ABP").
            value = 0;
    } catch (error) {
        document.getElementById("units-ABP").
        value = "Error";
    }

}


function decrementUnitABN() 
{

    let result = 

        document.getElementById("units-ABN").value;
    try {
        if(result > 0){
            result = --result;
            document.getElementById("units-ABN").
            value = result;
            }
            else 
            document.getElementById("units-ABN").
            value = 0;
    } catch (error) {
        document.getElementById("units-ABN").
        value = "Error";
    }

}

function decrementUnitAN() 
{

    let result = 

        document.getElementById("units-AN").value;
    try {
        if(result > 0){
            result = --result;
            document.getElementById("units-AN").
            value = result;
            }
            else 
            document.getElementById("units-AN").
            value = 0;
    } catch (error) {
        document.getElementById("units-AN").
        value = "Error";
    }

}

function decrementUnitON() 
{

    let result = 

        document.getElementById("units-ON").value;
    try {
        if(result > 0){
            result = --result;
            document.getElementById("units-ON").
            value = result;
            }
            else 
            document.getElementById("units-ON").
            value = 0;
    } catch (error) {
        document.getElementById("units-0N").
        value = "Error";
    }

}

function decrementUnitOP() 
{

    let result = 

        document.getElementById("units-OP").value;
    try {
        if(result > 0){
            result = --result;
            document.getElementById("units-OP").
            value = result;
            }
            else 
            document.getElementById("units-OP").
            value = 0;
    } catch (error) {
        document.getElementById("units-0P").
        value = "Error";
    }

}

function decrementUnitBP() 
{

    let result = 

        document.getElementById("units-BP").value;
    try {
        if(result > 0){
            result = --result;
            document.getElementById("units-BP").
            value = result;
            }
            else 
            document.getElementById("units-BP").
            value = 0;
    } catch (error) {
        document.getElementById("units-BP").
        value = "Error";
    }

}

function decrementUnitBN() 
{

    let result = 

        document.getElementById("units-BN").value;
    try {
        if(result > 0){
            result = --result;
            document.getElementById("units-BN").
            value = result;
            }
            else 
            document.getElementById("units-BN").
            value = 0;
    } catch (error) {
        document.getElementById("units-BN").
        value = "Error";
    }

}

function incrementUnitON() 
{

    let result = 

        document.getElementById("units-ON").value;
    try {
        result = ++result;
        document.getElementById("units-ON").
        value = result;
    } catch (error) {
        document.getElementById("units-ON").
        value = "Error";
    }

}

function incrementUnitOP() 
{

    let result = 

        document.getElementById("units-OP").value;
    try {
        result = ++result;
        document.getElementById("units-OP").
        value = result;
    } catch (error) {
        document.getElementById("units-OP").
        value = "Error";
    }

}

function incrementUnitAN() 
{

    let result = 

        document.getElementById("units-AN").value;
    try {
        result = ++result;
        document.getElementById("units-AN").
        value = result;
    } catch (error) {
        document.getElementById("units-AN").
        value = "Error";
    }

}

function incrementUnitBP() 
{

    let result = 

        document.getElementById("units-BP").value;
    try {
        result = ++result;
        document.getElementById("units-BP").
        value = result;
    } catch (error) {
        document.getElementById("units-BP").
        value = "Error";
    }

}

function incrementUnitBN() 
{

    let result = 

        document.getElementById("units-BN").value;
    try {
        result = ++result;
        document.getElementById("units-BN").
        value = result;
    } catch (error) {
        document.getElementById("units-BN").
        value = "Error";
    }

}

function incrementUnitABN() 
{

    let result = 

        document.getElementById("units-ABN").value;
    try {
        result = ++result;
        document.getElementById("units-ABN").
        value = result;
    } catch (error) {
        document.getElementById("units-ABN").
        value = "Error";
    }

}

function incrementUnitABP() 
{

    let result = 

        document.getElementById("units-ABP").value;
    try {
        result = ++result;
        document.getElementById("units-ABP").
        value = result;
    } catch (error) {
        document.getElementById("units-ABP").
        value = "Error";
    }

}