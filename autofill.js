window.setInterval(
  async () => {
    async function getName(first) {
      let url = 'https://raw.githubusercontent.com/dominictarr/random-name/master/names.txt';
      first && (url = url.replace(
        'names.txt',
        'first-names.txt'
      ));
      const http = new XMLHttpRequest();
      http.open(
        'GET',
        url,
        false
      );
      http.send();
      const ls = http.responseText.split('\n');
      return ls[Math.floor(Math.random() * ls.length)].replace(
        '\r',
        ''
      );
    }

    async function getInterval() {
      await new Promise(r => setTimeout(r, 500));
    }

    function setInputValue(id, val) {
      const x = document.querySelector('[id*=' + id + ']');
      x.focus();
      if (x.type === 'select-one') {
        x.selectedIndex = val;
      } else {
        x.value = val;
      }
      try {
        x.onChange({
          target: {
            value: val,
          },
        });
        x.blur();
      } catch (error) {/* Nothing to do*/
      }
      try {
        x.onKeyDown({
          target: {
            value: val,
          },
        });
        x.blur();
      } catch (error) {/* Nothing to do*/
      }
      try {
        x.onKeyUp({
          target: {
            value: val,
          },
        });
        x.blur();
      } catch (error) {/* Nothing to do*/
      }
      try {
        x.onMouseEnter({
          target: {
            value: val,
          },
        });
        x.blur();
      } catch (error) {/* Nothing to do*/
      }

      Object.keys(x).filter(((i) => i.includes('_react'))).forEach(function(key) {
        if (x.type === 'select-one') {
          x[key].selectedIndex = val;
        } else {
          x[key].value = val;
        }
        try {
          x[key].onChange({
            target: {
              value: val,
            },
          });
          x[key].blur();
        } catch (error) {/* Nothing to do*/
        }
        try {
          x[key].onKeyDown({
            target: {
              value: val,
            },
          });
          x[key].blur();
        } catch (error) {/* Nothing to do*/
        }
        try {
          x[key].onKeyUp({
            target: {
              value: val,
            },
          });
          x[key].blur();
        } catch (error) {/* Nothing to do*/
        }
        try {
          x[key].onMouseEnter({
            target: {
              value: val,
            },
          });
          x[key].blur();
        } catch (error) {/* Nothing to do*/
        }
      });
    }

    if (document.URL.includes('spotify.com/signup') && document.readyState === 'complete') {
      try {
        var vpnError = document.querySelector('[class*=\'Message\']').innerText.includes('VPN')
      } catch (error) {
        var vpnError = false
      }
      if(vpnError === false && grecaptcha.enterprise.getResponse() !== ''){
        try {
          document.querySelector('[id*="accept-recommended"]').click();
        } catch (error) {/* Done */}

        const domains = [
          'nd4.us',
          'iva.pw',
          'rawmail.xyz',
          'orb.pw',
        ];
        const domain = String(domains[Math.floor(Math.random() * domains.length)]);
        const name = [
          await getName(true),
          await getName(false),
        ];
        const randomDay = String(parseInt(Math.random() * (28 - 1) + 1));
        const randomMonth = String(parseInt(Math.random() * (12 - 1) + 1));
        const randomYear = String(parseInt(Math.random() * (1970 - 2003) + 2003));
        const password = String('');
        const email = String(name.join(',').replace(
          ',',
          ''
        ) + '_' + randomYear + '@' + domain);
        const displayname = String(name.join(',').replace(
          ',',
          ' '
        ));

        getInterval();
        setInputValue(
          'email',
          email
        );
        getInterval();
        setInputValue(
          'confirm',
          email
        );
        getInterval();
        setInputValue(
          'password',
          password
        );
        getInterval();
        setInputValue(
          'displayname',
          displayname
        );
        getInterval();
        setInputValue(
          'day',
          randomDay
        );
        getInterval();
        setInputValue(
          'month',
          randomMonth
        );
        getInterval();
        setInputValue(
          'year',
          randomYear
        );
        getInterval();
        if (parseInt(Math.random() * 2) ? true : false) {
          document.getElementById('gender_option_male').click();
        } else {
          document.getElementById('gender_option_female').click();
        }
        getInterval();
        document.forms[0].querySelectorAll('input[type="checkbox"]').forEach(function(i) {
          !i.checked && i.click();
        });
        document.querySelector('button[type="submit"]').click();
      } else {
        document.reload(true)
      }
    }
  },
  1000
);
