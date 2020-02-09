import React, { Fragment } from "react";
import PropTypes from "prop-types";
import fetchPopularRepos from "../../utils/api";
import ReposGrid from "./repos-grid";

function LanguagesNav({ selected, onUpdatedLanguage }) {
  const languages = ["All", "JavaScript", "Java", "Ruby", "CSS", "Python"];
  return (
    <ul className="flex-center">
      {languages.map(language => (
        <li key={language}>
          <button
            className="btn-clear nav-link"
            style={language === selected ? { color: "red" } : null}
            onClick={() => onUpdatedLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdatedLanguage: PropTypes.func.isRequired
};

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
      repos: {},
      error: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  updateLanguage(currentLanguage) {
    this.setState({
      selectedLanguage: currentLanguage,
      error: null
    });

    if (!this.state.repos[currentLanguage]) {

      fetchPopularRepos(currentLanguage)
        .then(data => {

          this.setState( ({ repos }) => ({
            repos: {
              ...repos,
              [currentLanguage]: data
            }
          }));

        })
        .catch(error => {
          console.warn(error.message);

          this.setState({
            error
          });
        });
    }
  }

  isLoading() {
    const { selectedLanguage, repos, error } = this.state;

    return !repos[selectedLanguage] && error === null;
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  //        <ReposList selectedLanguage={selectedLanguage} repos={repos} error={error}></ReposList>
  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdatedLanguage={this.updateLanguage}
        />
        {this.isLoading() && <p>LOADING...</p>}

        {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]}/> }

        {error && <p>{error}</p>}
      </Fragment>
    );
  }
}
