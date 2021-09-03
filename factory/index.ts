/**
 * Factory pattern.
 *
 * Defination: The factory pattern defines an interface for creating an object,
 * but lets subclasses decide which class to instantiate. Factory method lets
 * a class defer instanciation to subclasses.
 *
 * Idea: Encapsulating business logic for creation of objects.
 *
 * This prevents duplication of creation logic.
 *
 * Video link: https://youtu.be/EcFVTgRHJLM
 */

/**
 * @file Notes and implementation for factory pattern.
 */

class Game {
  level: number;
  obstacles: Obstacle[] = [];
  obstacleFactory: ObstacleFactory;

  constructor(level: number, obstacleFactory: ObstacleFactory) {
    this.level = level;
    this.obstacleFactory = obstacleFactory;
    this.createObstacles();
  }

  createObstacles(): void {
    for (let i = 0; i < 10; i++) {
      // Instantion is deferred to the factory class.
      // Instantion and Game class are loosly coupled with this approach.
      this.obstacles.push(this.obstacleFactory.createObstacle(this.level));
    }
  }
}

interface Obstacle {
  size: number;
  danger: number;
}

interface ObstacleFactory {
  createObstacle: (gameLevel: number) => Obstacle;
}

class RandomObstacleFactory implements ObstacleFactory {
  createObstacle(gameLevel: number): Obstacle {
    /**
     * Business logic for creation of Obstance instance is encapsulated using
     * this factory.
     */
    if (gameLevel < 10) {
      return new Mountain();
    }

    if (gameLevel < 100) {
      return new Asteriod();
    }

    return new Planet();
  }
}

class Mountain implements Obstacle {
  size: number = 10
  danger: number = 10;
}

class Asteriod implements Obstacle {
  size: number = 100;
  danger: number = 100;
}

class Planet implements Obstacle {
  size: number = 1000;
  danger: number = 1000;
}

const randomObstacleFactory = new RandomObstacleFactory();
const game = new Game(90, randomObstacleFactory);

console.log(game.obstacles);
