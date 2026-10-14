// Vertalingen NL / FR
window.RT2_I18N = (function () {
  const T = {
    nl: {
      eyebrow: 'Kerstverkoop',
      title: 'Bestel uw <em>kerstboom.</em>',
      impactTitle: '1 kerstboom = 3 warme maaltijden',
      impactText: 'Elke boom dekt de kosten van 3 warme maaltijden via Kamiano.',
      lead: 'Bestel online, betaal veilig met Bancontact of kaart en ontvang meteen een bevestiging in je mailbox.',
      s1: 'Bestel', s1d: 'Kies hoeveel bomen',
      s2: 'Betaal', s2d: 'Veilig via Mollie',
      s3: 'Klaar', s3d: 'Bevestiging per mail',
      formTitle: 'Je bestelling', formSub: 'Velden met * zijn verplicht.',
      lgTrees: 'Kerstbomen', tree: 'Kerstboom', perTree: 'per boom',
      lgYou: 'Jouw gegevens', name: 'Naam + voornaam *', email: 'E-mail *', phone: 'Telefoon *',
      invoice: 'Ik wil een factuur ontvangen',
      company: 'Bedrijfsnaam *', vat: 'BTW-nummer *', address: 'Straat + nummer *', postal: 'Postcode *', city: 'Gemeente *',
      lgPay: 'Betaalmethode', mBancontact: 'Bancontact', mCard: 'Creditcard', mPaypal: 'PayPal',
      total: 'Totaal', pay: 'Doorgaan naar betaling', loading: 'Betaling voorbereiden…',
      secure: 'Veilig betalen via Mollie',
      error: 'Er ging iets mis bij het starten van de betaling. Probeer het opnieuw of neem contact met ons op.',
      closedTitle: 'Bestellingen gesloten',
      closedText: 'Online bestellen kan momenteel niet. Wil je toch een kerstboom? Neem gerust contact op.',
      questions: 'Vragen?',
      // bedankpagina
      waitTitle: 'Even geduld…', waitText: 'We controleren je betaling bij Mollie.',
      paidTitle: 'Bedankt voor je bestelling!',
      paidText: 'Je betaling is gelukt. Je ontvangt zo dadelijk een bevestigingsmail (kijk ook even in je spam).',
      pendingTitle: 'Betaling in behandeling',
      pendingText: 'Je betaling is nog niet bevestigd. Zodra Mollie ze goedkeurt, krijg je automatisch een bevestigingsmail. Je hoeft niets opnieuw te doen.',
      failTitle: 'Betaling niet gelukt',
      failText: 'Je betaling werd niet afgerond of is mislukt. Er werd niets aangerekend. Probeer het gerust opnieuw: je gegevens staan nog ingevuld.',
      unknownTitle: 'Bestelling niet gevonden',
      unknownText: 'We vinden deze bestelling niet terug. Kreeg je geen bevestigingsmail? Neem dan contact met ons op.',
      dNr: 'Bestelnummer', dQty: 'Aantal bomen', dTotal: 'Betaald',
      again: 'Opnieuw proberen', home: 'Terug naar de website'
    },
    fr: {
      eyebrow: 'Vente de Noël',
      title: 'Commandez votre <em>sapin de Noël.</em>',
      impactTitle: '1 sapin = 3 repas chauds',
      impactText: 'Chaque sapin couvre le coût de 3 repas chauds via Kamiano.',
      lead: 'Commandez en ligne, payez en toute sécurité par Bancontact ou carte et recevez immédiatement une confirmation par e-mail.',
      s1: 'Commandez', s1d: 'Choisissez le nombre',
      s2: 'Payez', s2d: 'En sécurité via Mollie',
      s3: 'C’est fait', s3d: 'Confirmation par e-mail',
      formTitle: 'Votre commande', formSub: 'Les champs marqués * sont obligatoires.',
      lgTrees: 'Sapins', tree: 'Sapin de Noël', perTree: 'par sapin',
      lgYou: 'Vos coordonnées', name: 'Nom + prénom *', email: 'E-mail *', phone: 'Téléphone *',
      invoice: 'Je souhaite recevoir une facture',
      company: 'Nom de l’entreprise *', vat: 'Numéro de TVA *', address: 'Rue + numéro *', postal: 'Code postal *', city: 'Commune *',
      lgPay: 'Mode de paiement', mBancontact: 'Bancontact', mCard: 'Carte de crédit', mPaypal: 'PayPal',
      total: 'Total', pay: 'Continuer vers le paiement', loading: 'Préparation du paiement…',
      secure: 'Paiement sécurisé via Mollie',
      error: 'Un problème est survenu lors du démarrage du paiement. Réessayez ou contactez-nous.',
      closedTitle: 'Commandes fermées',
      closedText: 'Les commandes en ligne ne sont pas possibles pour le moment. Vous souhaitez quand même un sapin ? Contactez-nous.',
      questions: 'Des questions ?',
      waitTitle: 'Un instant…', waitText: 'Nous vérifions votre paiement auprès de Mollie.',
      paidTitle: 'Merci pour votre commande !',
      paidText: 'Votre paiement a réussi. Vous allez recevoir un e-mail de confirmation (vérifiez aussi vos spams).',
      pendingTitle: 'Paiement en cours',
      pendingText: 'Votre paiement n’est pas encore confirmé. Dès que Mollie l’approuve, vous recevrez automatiquement un e-mail de confirmation. Rien d’autre à faire.',
      failTitle: 'Paiement non abouti',
      failText: 'Votre paiement n’a pas abouti ou a été annulé. Rien n’a été débité. Réessayez : vos données sont déjà remplies.',
      unknownTitle: 'Commande introuvable',
      unknownText: 'Nous ne retrouvons pas cette commande. Pas reçu d’e-mail de confirmation ? Contactez-nous.',
      dNr: 'Numéro de commande', dQty: 'Nombre de sapins', dTotal: 'Payé',
      again: 'Réessayer', home: 'Retour au site'
    }
  };

  const store = {
    get() { try { return localStorage.getItem('rt2-lang'); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem('rt2-lang', v); } catch (e) {} }
  };

  const api = {
    lang: 'nl',
    t(key) { return (T[api.lang] && T[api.lang][key]) || T.nl[key] || key; },
    apply(lang) {
      api.lang = T[lang] ? lang : 'nl';
      document.documentElement.lang = api.lang;
      document.querySelectorAll('[data-t]').forEach(el => { el.textContent = api.t(el.dataset.t); });
      document.querySelectorAll('[data-t-html]').forEach(el => { el.innerHTML = api.t(el.dataset.tHtml); });
      document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === api.lang)));
      store.set(api.lang);
      document.dispatchEvent(new CustomEvent('langchange'));
    }
  };

  const urlLang = new URLSearchParams(location.search).get('lang');
  const initial = urlLang || store.get() || ((navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'nl');

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => api.apply(b.dataset.lang)));
    api.apply(initial);
  });
  api.lang = T[initial] ? initial : 'nl';
  return api;
})();
