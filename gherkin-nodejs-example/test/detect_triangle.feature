Feature: Fungsi pendeteksi segitiga
  Sebagai seorang user, saya ingin mengetahui segitiga apa yang terbentuk ketika diberikan 3 input sisi.

  Scenario Outline: Mendeteksi segitiga sama sisi
    Given Saya memiliki nilai sisi <sideA>, <sideB>, <sideC>
    When Saya mendeteksi segitiga
    Then Menghasilkan "Segitiga sama sisi"

    Examples:
      | sideA | sideB | sideC |
      | 4     | 4     | 4     |
      | 1     | 1     | 1     |
      | 8     | 8     | 8     |

  Scenario Outline: Mendeteksi segitiga sama kaki
    Given Saya memiliki nilai sisi <sideA>, <sideB>, <sideC>
    When Saya mendeteksi segitiga
    Then Menghasilkan "Segitiga sama kaki"

    Examples:
      | sideA | sideB | sideC |
      | 2     | 2     | 1     |
      | 4     | 2     | 4     |
      | 1     | 3     | 3     |

  Scenario Outline: Mendeteksi segitiga sembarang
    Given Saya memiliki nilai sisi <sideA>, <sideB>, <sideC>
    When Saya mendeteksi segitiga
    Then Menghasilkan "Segitiga sembarang"

    Examples:
      | sideA | sideB | sideC |
      | 4     | 2     | 1     |
      | 2     | 3     | 5     |
      | 8     | 2     | 1     |
