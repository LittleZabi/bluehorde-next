{
  try {
    function api() {
      let url = "/custome-api.php?get-withdrawals=1";
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
          try {
            let res = xhr.responseText;
            console.log("data: ", JSON.parse(res));
            let data = JSON.parse(res);
            let wd_html = "";
            let dep_html = "";
            let wd = data.withdrawals;
            let dep = data.deposits;
            wd.map((e) => {
              wd_html += `
                <div class="a-8xpqt">
                  <div class="bn392">
                    <span class="u-ees">${e.username}</span>
                    <span class="u-klloeow">${new Date(
                      e.date
                    ).toDateString()}</span>
                  </div>
                  <div class="htlst2">${parseInt(e.amount).toFixed(1)}${
                e.currency ? e.currency : "USD"
              }</div>
                </div>`;
            });
            dep.map((e) => {
              dep_html += `
                <div class="a-8xpqt">
                  <div class="bn392">
                    <span class="u-ees">${e.username}</span>
                    <span class="u-klloeow">${new Date(
                      e.date
                    ).toDateString()}</span>
                  </div>
                  <div class="htlst2">${parseInt(e.amount).toFixed(1)}${
                e.currency ? e.currency : "USD"
              }</div>
                </div>`;
            });
            res = JSON.parse(res) ?? res;
            addElement(res[0].total, wd_html, dep_html);
          } catch (e) {
            console.log("custome-api.php response read error: ", e);
          }
        }
      };
      xhr.open("GET", url, true);
      xhr.send(url);
    }
    function addElement(numbers, wd, dep) {
      const v = document.querySelector(
        "body > div.page-wrapper > section:nth-child(8) > div.container > div.row.justify-content-center"
      );
      const e = `
<style>
.a-x8xlq {
  display: flex;
  justify-content: center;
}
section {
  padding: 10px;

}

.a-8xpqt {
  display: flex;
  width: 361px;
  justify-content: space-between;
  padding: 11px 19px;
}
.bn392 {
  display: flex;
  flex-direction: column;
}
.u-ees {
  font-weight: bold;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
}
.u-klloeow {
  margin-left: 28px;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  color: #2b2b2d;
}
.htlst2 {
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #00c4ff;
  text-transform: uppercase;
}
.yt02l {
  margin: 50px 20px;
}
.yt02l h3 {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #0099ff;
  text-transform: uppercase;
  font-size: 32px;
}
.t9-2ls {
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-size: 32px;
}
.l-dkxlx{
  color: #0099ff;
  border-radius: 4px;
  box-shadow: 0 0 16px 1px #0000001c;
}
</style>
    <div class="col-lg-8">
        <div class="section-header text-center">
            <h2 class="section-title">Total Widthraws</h2>
            <h1>${numbers}</h1>
            
        </div>
        </div>
        <h3 class="t9-2ls">Last Details</h3>
        <div class="a-x8xlq">
              <div class="yt02l">
                <h3>Widthraws</h3>
                <section>
                  <div class="l-dkxlx">
                    ${wd}
                  </div>
                </section>
              </div>
              <div class="yt02l">
                <h3>Deposit</h3>
                <section>
                  <div class="l-dkxlx">
                    ${dep}
                  </div>
                </section>
              </div>
              </div>
        
    `;
      v.innerHTML = e + v.innerHTML;
      return 1;
    }
    api();
  } catch (e) {
    console.log(e);
  }
}
