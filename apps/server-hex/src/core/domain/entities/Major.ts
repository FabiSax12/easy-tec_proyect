/**
 * Represents an academic major or specialization.
 * This is a core domain entity used across multiple business modules.
 */
export class Major {

  /**
   * The unique identifier for the major.
   * @readonly
   */
  public readonly id: number;

  /**
   * The name of the major.
   */
  public name: string;


  /**
  * @param props - The properties to initialize the Major entity.
  * @param props.id - The optional unique identifier.If not provided, assumes a new entity.
  * @param props.name - The name of the major.
  */
  constructor(props: { id?: number; name: string }) {
    if (props.id !== undefined) {
      this.id = props.id;
    }
    this.name = props.name;
  }
}