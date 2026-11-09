// Adresy zewnętrzne, które powtarzają się w kilku miejscach naraz.
// Jedno miejsce do podmiany, gdy zmieni się platforma albo adres produktu.

/** Landing sprzedażowy kursu „Menu z głowy” (platforma WebToLearn). */
export const KURS_URL =
  'https://kursy.ewachamczyk.pl/next/public/catalog/product/menu-z-glowy';

/** Checkout ebooka „Nie zniknęłaś” — WebToLearn, Szybka Sprzedaż #5
 *  („Nie zniknęłaś – e-book (cena regularna)”, 47 zł).
 *  Osobny adres `…/s/nie-zniknelas-oferta.html` to OTO za 27 zł po zakupie kursu —
 *  NIE podpinaj go na stronie, bo zepsujesz cenę regularną.
 *  Poprzedni koszyk EasyTools (easl.ink/Z22wp) ma wyłączone płatności. */
export const EBOOK_URL = 'https://kursy.ewachamczyk.pl/s/nie-zniknelas.html';

/** Adres oferty pokazywanej po zapisie na newsletter (/mapa-dziekuje).
 *  Domyślnie zwykła strona kursu. Jeśli ustawisz w WebToLearn osobną ofertę
 *  jednorazową (OTO), podmień tutaj jeden adres — reszta strony zostaje bez zmian. */
export const OFERTA_PO_ZAPISIE_URL = KURS_URL;
