#  1. Komponent Card

Przygotuj component Card podobny do [tego](https://material-ui.com/components/cards/#complex-interaction.)  Możesz pominąć trzy kropki po prawej stronie. Ikonki można również pominąć, a rozwijaną treść dodatkową możesz pokazywać za pomocą propsa showMore, który będzie przyjmował wartość logiczną np.:

`<Card title="Shrim and Chorizo Paella" intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the musse" />`

# 2. Walidacja formularzy
Przygotuj formularz, w którym użytkownik będzie wprowadzał swoje dane:

#### imię (element input)
#### email (element input)
#### krótkie bio (element textarea)
#### wybór płci - (element radio)

akceptację regulaminu (nie musi istnieć ;) tutaj skorzystamy z elementu checkbox)
Na końcu formularza powinien znajdować się przycisk do jego wysłania. Wszystkie pola są wymagane, czyli nie da się wysłać formularza do momentu wprowadzenia przez użytkownika wszystkich danych oraz akceptacji regulaminu.

Jeśli jakieś pole nie zostało wypełnione, wówczas aplikacja ustawi czerwony border na tym polu, a pod polem znajdzie się komunikat: "Pole wymagane".

Jeśli wszystkie informacje zostały wprowadzone, to wówczas wszystkie pola zostaną wyczyszczone (nie będzie w nich danych), a na ekranie pojawi się komunikat "Dziękujemy za wysłanie"

# 3. Formik lub React Hook Form
Wykonaj to zadanie 2 za pomocą biblioteki Formik lub React Hook Form
