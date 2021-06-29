const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');
const RocketRepairKit = require('./RocketRepairKit');

describe('A RocketLauncher', () => {

  // dummy example
  it('should launch all rockets', () => {
    // Arrage
    const nasaRocket = new Rocket('Nasa');
    const spaceXRocket = new Rocket('SpaceX');
    // dummy
    const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket]);

    // Action
    rocketLauncher.launchAllRockets();

    // Assert
    expect(nasaRocket.engineStatus).toEqual('active');
    expect(spaceXRocket.engineStatus).toEqual('active');
    expect(rocketLauncher.rockets.length).toEqual(0);
  });

  it('should launch only one rocket by queue', () => {
    // Arrage
    const nasaRocket = new Rocket('Nasa');
    const spaceXRocket = new Rocket('SpaceX');
    // dummy
    const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket]);

    // Action
    rocketLauncher.launchRocketByQueue();

    // Assert
    expect(nasaRocket.engineStatus).toEqual('active');
    expect(spaceXRocket.engineStatus).toEqual('inactive');
    expect(rocketLauncher.rockets.length).toEqual(1);
  });

  // stub example
  it('should return correct result when repair kit cannot repair the rocket', async () => {
    // Arrange
    /** stub! Kita butuh mengubah implementasi fungsi untuk menghasilkan keadaan sesuai skenario uji.
     * Namun kita tidak menguji apa pun terkait fungsi yang diubah. */
    const fakeRocketRepairKit = {
      repair: () => Promise.reject('failed to repair the rocket'),
    }

    const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [{}]);

    // Action
    const result = await rocketLauncher.repairAllRockets();

    // Assert
    expect(result).toEqual('there was 1 of 1 rocket fail to repair!');
  });

  // mock example
  it('should repair some repairable rocket when repair kit cannot repair some the rocket', async () => {
    // Arrage
    const repairableRocket = new Rocket('repairableRocket');
    const unrepairableRocket = new Rocket('unrepairableRocket');
    /** mock! Kita butuh mengubah implementasi fungsi untuk menghasilkan keadaan sesuai skenario uji.
     * Dan kita butuh untuk menguji apakah fungsi yang dijalankan/diperlakukan. */
    const fakeRocketRepairKit = {
      repair: jest.fn().mockImplementation((rocket) => {
        if (rocket.name === 'repairableRocket') {
          return Promise.resolve();
        }

        return Promise.reject('failed to repair the rocket');
      }),
    }

    const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [repairableRocket, unrepairableRocket]);

    // Action
    const result = await rocketLauncher.repairAllRockets();

    // Assert
    expect(result).toEqual(`there was 1 of 2 rocket fail to repair!`);
    /**
     * memastikan bahwa fungsi repair terpanggil
     */
    expect(fakeRocketRepairKit.repair).toBeCalled();
    expect(fakeRocketRepairKit.repair).toBeCalledWith(repairableRocket);
  });

  // spy example
  it('should repair all the rockets with repair kit correctly', async () => {
    // Arrange
    const nasaRocket = new Rocket('Nasa');
    const spaceXRocket = new Rocket('SpaceX');
    // Menggunakan objek real
    const rocketRepairKit = new RocketRepairKit({}, {}, {});
    /** spy! Memata-matai fungsi repair pada objek RocketRepairKit
     * Tujuannya, untuk memastikan fungsi repair dijalankan */
    const spyRepair = jest.spyOn(rocketRepairKit, 'repair');
    const rocketLauncher = new RocketLauncher(rocketRepairKit, [nasaRocket, spaceXRocket]);

    // Action
    const result = await rocketLauncher.repairAllRockets();

    // Assert
    expect(spyRepair).toBeCalledTimes(2);
    expect(spyRepair).toBeCalledWith(nasaRocket);
    expect(spyRepair).toBeCalledWith(spaceXRocket);
    expect(result).toEqual('all rocket repaired!');
  });
});
