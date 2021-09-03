/**
 * Singleton pattern.
 *
 * Defination: Ensure a class has only one instance and provide a global point
 * of access to it.
 *
 * Singleton is a global variable in terms of OOP.
 *
 * Video link: https://youtu.be/hUE_j6q0LTQ
 */

/**
 * @file Notes and implementation for singleton pattern.
 */

class Singleton {
  private static _instance: Singleton;

  private Singleton() {}

  static getInstance(): Singleton {
    if (!this._instance) {
      this._instance = new Singleton();
    }

    return this._instance;
  }
}
