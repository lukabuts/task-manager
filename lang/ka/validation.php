<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */
    'accepted' => ':attribute უნდა იყოს მიღებული.',
    'accepted_if' => ':attribute უნდა იყოს მიღებული, როცა :other არის :value.',
    'active_url' => ':attribute უნდა იყოს სწორი URL.',
    'after' => ':attribute უნდა იყოს თარიღი :date-ის შემდეგ.',
    'after_or_equal' => ':attribute უნდა იყოს თარიღი :date-ის შემდეგ ან ტოლი.',
    'alpha' => ':attribute უნდა შეიცავდეს მხოლოდ ასოებს.',
    'alpha_dash' => ':attribute უნდა შეიცავდეს მხოლოდ ასოებს, რიცხვებს, ტირეს და ქვედა ტირეს.',
    'alpha_num' => ':attribute უნდა შეიცავდეს მხოლოდ ასოებს და რიცხვებს.',
    'array' => ':attribute უნდა იყოს მასივი.',
    'ascii' => ':attribute უნდა შეიცავდეს მხოლოდ ერთბაიტიან ალფანუმერულ სიმბოლოებს და სიმბოლოებს.',
    'before' => ':attribute უნდა იყოს თარიღი :date-მდე.',
    'before_or_equal' => ':attribute უნდა იყოს თარიღი :date-მდე ან ტოლი.',
    'between' => [
        'array' => ':attribute უნდა შეიცავდეს :min-დან :max-მდე ელემენტებს.',
        'file' => ':attribute უნდა იყოს :min-დან :max კილობაიტამდე.',
        'numeric' => ':attribute უნდა იყოს :min-დან :max-მდე.',
        'string' => ':attribute უნდა იყოს :min-დან :max სიმბოლომდე.',
    ],
    'boolean' => ':attribute უნდა იყოს მართალი ან მცდარი.',
    'can' => ':attribute შეიცავს დაუშვებელ მნიშვნელობას.',
    'confirmed' => ':attribute-ის დადასტურება არ ემთხვევა.',
    'contains' => ':attribute აკლია საჭირო მნიშვნელობა.',
    'current_password' => 'პაროლი არასწორია.',
    'date' => ':attribute უნდა იყოს სწორი თარიღი.',
    'date_equals' => ':attribute უნდა იყოს თარიღი ტოლი :date-ის.',
    'date_format' => ':attribute უნდა ემთხვეოდეს ფორმატს :format.',
    'decimal' => ':attribute უნდა შეიცავდეს :decimal ათწილადებს.',
    'declined' => ':attribute უნდა იყოს უარყოფილი.',
    'declined_if' => ':attribute უნდა იყოს უარყოფილი, როცა :other არის :value.',
    'different' => ':attribute და :other უნდა იყოს განსხვავებული.',
    'digits' => ':attribute უნდა იყოს :digits ციფრი.',
    'digits_between' => ':attribute უნდა იყოს :min-დან :max ციფრამდე.',
    'dimensions' => ':attribute-ს აქვს არასწორი სურათის ზომები.',
    'distinct' => ':attribute-ს აქვს დუბლირებული მნიშვნელობა.',
    'doesnt_end_with' => ':attribute არ უნდა მთავრდებოდეს შემდეგით: :values.',
    'doesnt_start_with' => ':attribute არ უნდა იწყებოდეს შემდეგით: :values.',
    'email' => ':attribute უნდა იყოს სწორი ელ.ფოსტა.',
    'ends_with' => ':attribute უნდა მთავრდებოდეს შემდეგით: :values.',
    'enum' => 'არჩეული :attribute არასწორია.',
    'exists' => 'არჩეული :attribute არასწორია.',
    'extensions' => ':attribute უნდა იყოს ერთ-ერთი შემდეგი გაფართოებით: :values.',
    'file' => ':attribute უნდა იყოს ფაილი.',
    'filled' => ':attribute უნდა ჰქონდეს მნიშვნელობა.',
    'gt' => [
        'array' => ':attribute უნდა შეიცავდეს :value-ზე მეტ ელემენტებს.',
        'file' => ':attribute უნდა იყოს :value-ზე მეტ კილობაიტი.',
        'numeric' => ':attribute უნდა იყოს :value-ზე მეტი.',
        'string' => ':attribute უნდა შეიცავდეს :value-ზე მეტ სიმბოლოს.',
    ],
    'gte' => [
        'array' => ':attribute უნდა შეიცავდეს :value ან მეტ ელემენტებს.',
        'file' => ':attribute უნდა იყოს მეტი ან ტოლი :value კილობაიტს.',
        'numeric' => ':attribute უნდა იყოს მეტი ან ტოლი :value.',
        'string' => ':attribute უნდა იყოს მეტი ან ტოლი :value სიმბოლოს.',
    ],
    'hex_color' => ':attribute უნდა იყოს სწორი ჰექსადეციმალური ფერი.',
    'image' => ':attribute უნდა იყოს სურათი.',
    'in' => 'არჩეული :attribute არასწორია.',
    'in_array' => ':attribute უნდა არსებობდეს :other-ში.',
    'integer' => ':attribute უნდა იყოს მთელი რიცხვი.',
    'ip' => ':attribute უნდა იყოს სწორი IP მისამართი.',
    'ipv4' => ':attribute უნდა იყოს სწორი IPv4 მისამართი.',
    'ipv6' => ':attribute უნდა იყოს სწორი IPv6 მისამართი.',
    'json' => ':attribute უნდა იყოს სწორი JSON სტრიქონი.',
    'list' => ':attribute უნდა იყოს სია.',
    'lowercase' => ':attribute უნდა იყოს ქვედა რეგისტრის.',
    'lt' => [
        'array' => ':attribute უნდა შეიცავდეს ნაკლები ვიდრე :value ელემენტებს.',
        'file' => ':attribute უნდა იყოს ნაკლები ვიდრე :value კილობაიტი.',
        'numeric' => ':attribute უნდა იყოს ნაკლები ვიდრე :value.',
        'string' => ':attribute უნდა იყოს ნაკლები ვიდრე :value სიმბოლო.',
    ],
    'lte' => [
        'array' => ':attribute არ უნდა შეიცავდეს :value-ზე მეტ ელემენტებს.',
        'file' => ':attribute უნდა იყოს ნაკლები ან ტოლი :value კილობაიტს.',
        'numeric' => ':attribute უნდა იყოს ნაკლები ან ტოლი :value.',
        'string' => ':attribute უნდა იყოს ნაკლები ან ტოლი :value სიმბოლოს.',
    ],
    'mac_address' => ':attribute უნდა იყოს სწორი MAC მისამართი.',
    'max' => [
        'array' => ':attribute არ უნდა შეიცავდეს :max-ზე მეტ ელემენტებს.',
        'file' => ':attribute არ უნდა იყოს :max-ზე მეტ კილობაიტი.',
        'numeric' => ':attribute არ უნდა იყოს :max-ზე მეტ.',
        'string' => ':attribute არ უნდა შეიცავდეს :max-ზე მეტ სიმბოლოს.',
    ],
    'max_digits' => ':attribute არ უნდა შეიცავდეს :max-ზე მეტ ციფრებს.',
    'mimes' => ':attribute უნდა იყოს ფაილი ტიპის: :values.',
    'mimetypes' => ':attribute უნდა იყოს ფაილი ტიპის: :values.',
    'min' => [
        'array' => ':attribute უნდა შეიცავდეს მინიმუმ :min ელემენტებს.',
        'file' => ':attribute უნდა იყოს მინიმუმ :min კილობაიტი.',
        'numeric' => ':attribute უნდა იყოს მინიმუმ :min.',
        'string' => ':attribute უნდა იყოს მინიმუმ :min სიმბოლო.',
    ],
    'min_digits' => ':attribute უნდა შეიცავდეს მინიმუმ :min ციფრებს.',
    'missing' => ':attribute უნდა იყოს დაკარგული.',
    'missing_if' => ':attribute უნდა იყოს დაკარგული, როცა :other არის :value.',
    'missing_unless' => ':attribute უნდა იყოს დაკარგული, თუ :other არ არის :value.',
    'missing_with' => ':attribute უნდა იყოს დაკარგული, როცა :values არის წარმოდგენილი.',
    'missing_with_all' => ':attribute უნდა იყოს დაკარგული, როცა :values არის წარმოდგენილი.',
    'multiple_of' => ':attribute უნდა იყოს :value-ის მრავალჯერადი.',
    'not_in' => 'არჩეული :attribute არასწორია.',
    'not_regex' => ':attribute ფორმატი არასწორია.',
    'numeric' => ':attribute უნდა იყოს რიცხვი.',
    'password' => [
        'letters' => ':attribute უნდა შეიცავდეს მინიმუმ ერთ ასოს.',
        'mixed' => ':attribute უნდა შეიცავდეს მინიმუმ ერთ დიდ და ერთ პატარა ასოს.',
        'numbers' => ':attribute უნდა შეიცავდეს მინიმუმ ერთ რიცხვს.',
        'symbols' => ':attribute უნდა შეიცავდეს მინიმუმ ერთ სიმბოლოს.',
        'uncompromised' => 'მოცემული :attribute გამოჩნდა მონაცემთა გაჟონვაში. გთხოვთ, აირჩიოთ სხვა :attribute.',
    ],
    'present' => ':attribute უნდა იყოს წარმოდგენილი.',
    'present_if' => ':attribute უნდა იყოს წარმოდგენილი, როცა :other არის :value.',
    'present_unless' => ':attribute უნდა იყოს წარმოდგენილი, თუ :other არ არის :value.',
    'present_with' => ':attribute უნდა იყოს წარმოდგენილი, როცა :values არის წარმოდგენილი.',
    'present_with_all' => ':attribute უნდა იყოს წარმოდგენილი, როცა :values არის წარმოდგენილი.',
    'prohibited' => ':attribute აკრძალულია.',
    'prohibited_if' => ':attribute აკრძალულია, როცა :other არის :value.',
    'prohibited_unless' => ':attribute აკრძალულია, თუ :other არ არის :values-ში.',
    'prohibits' => ':attribute კრძალავს :other-ის წარმოდგენას.',
    'regex' => ':attribute ფორმატი არასწორია.',
    'required' => ':attribute აუცილებელია.',
    'required_array_keys' => ':attribute უნდა შეიცავდეს ჩანაწერებს: :values.',
    'required_if' => ':attribute აუცილებელია, როცა :other არის :value.',
    'required_if_accepted' => ':attribute აუცილებელია, როცა :other არის მიღებული.',
    'required_if_declined' => ':attribute აუცილებელია, როცა :other არის უარყოფილი.',
    'required_unless' => ':attribute აუცილებელია, თუ :other არ არის :values-ში.',
    'required_with' => ':attribute აუცილებელია, როცა :values არის წარმოდგენილი.',
    'required_with_all' => ':attribute აუცილებელია, როცა :values არის წარმოდგენილი.',
    'required_without' => ':attribute აუცილებელია, როცა :values არ არის წარმოდგენილი.',
    'required_without_all' => ':attribute აუცილებელია, როცა არცერთი :values არ არის წარმოდგენილი.',
    'same' => ':attribute უნდა ემთხვეოდეს :other-ს.',
    'size' => [
        'array' => ':attribute უნდა შეიცავდეს :size ელემენტებს.',
        'file' => ':attribute უნდა იყოს :size კილობაიტი.',
        'numeric' => ':attribute უნდა იყოს :size.',
        'string' => ':attribute უნდა იყოს :size სიმბოლო.',
    ],
    'starts_with' => ':attribute უნდა იწყებოდეს ერთ-ერთით: :values.',
    'string' => ':attribute უნდა იყოს სტრიქონი.',
    'timezone' => ':attribute უნდა იყოს სწორი დროის ზონა.',
    'unique' => ':attribute უკვე გამოყენებულია.',
    'uploaded' => ':attribute ატვირთვა ვერ მოხერხდა.',
    'uppercase' => ':attribute უნდა იყოს დიდი ასოებით.',
    'url' => ':attribute უნდა იყოს სწორი URL.',
    'ulid' => ':attribute უნდა იყოს სწორი ULID.',
    'uuid' => ':attribute უნდა იყოს სწორი UUID.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        'name' => 'სახელი',
        'description' => 'აღწერა',
        'due_date' => 'ვადა',
        'priority' => 'პრიორიტეტი',
        'completed' => 'დასრულებული',
        'completed_at' => 'დასრულების თარიღი',
        'name' => 'სახელი',
        'email' => 'ელ.ფოსტა',
        'password' => 'პაროლი',
        'password_confirmation' => 'პაროლის დადასტურება',
    ],

];
