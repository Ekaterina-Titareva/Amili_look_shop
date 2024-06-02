<?php
if (in_array('mod_rewrite', apache_get_modules())) {
    echo "Модуль mod_rewrite включен!";
} else {
    echo "Модуль mod_rewrite не включен!";
}
?>