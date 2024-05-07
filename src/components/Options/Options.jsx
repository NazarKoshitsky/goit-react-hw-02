import css from "./Options.module.css";

export default function Options({updateFeedback,
  resetParam,
  removeComments}) {
    return (
        <div className={css.buttons}>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}> Bad</button>
            {resetParam > 0 ? <button onClick={removeComments}>Reset</button> : ""}
        </div>
    );
}