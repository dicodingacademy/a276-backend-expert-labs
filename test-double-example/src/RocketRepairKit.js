class RocketRepairKit  {
  /**
   * Anggap proses membuat instance RocketRepairKit itu rumit
   * Karena ia membutuhkan banyak dependencies.
   */
  constructor(objA, objB, objC) {
    this.objA = objA;
    this.objB = objB;
    this.objC = objC;
  }

  repair(rocket) {
    /**
     * Anggap ini proses yang diambil dari suatu service external.
     * sehingga prosesnya membutuhkan waktu dan rentan gagal.
     */
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(`${rocket.name} repaired!`)
      }, 500);
    });
  }
}

module.exports = RocketRepairKit;
