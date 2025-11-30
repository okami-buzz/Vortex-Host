// Dashboard UI interactions
document.addEventListener("DOMContentLoaded", () => {
    const serverContainer = document.getElementById("servers-container");
    if(serverContainer){
        fetch("/order/user/123") // Example userId
        .then(res => res.json())
        .then(data => {
            if(data.success){
                data.orders.forEach(order => {
                    const div = document.createElement("div");
                    div.className = "server-box";
                    div.innerHTML = `
                        <h2>${order.plan}</h2>
                        <p>Status: ${order.status}</p>
                        ${order.serverData ? `<p>Panel: ${order.serverData.panelUrl}</p>` : ""}
                    `;
                    serverContainer.appendChild(div);
                });
            }
        });
    }
});
