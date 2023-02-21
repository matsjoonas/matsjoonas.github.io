"use strict";

const signButton = document.getElementById('sign');
signButton.onclick = async function () {
  const digest = "372d3f60f25e62de57a51edc73f3ae12d54c1b0f6b973fbc7e108a090c4c8060";
  const certificate = await window.hwcrypto.getCertificate({ lang: 'en' });
  const config = {
    type: 'SHA-256',
    hex: digest
  }
  const card_signature = await window.hwcrypto.sign(certificate, config, { lang: 'en' });
  console.log(card_signature);
};
