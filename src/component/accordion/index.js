import React from "react";

import { Collapse, Progress, Spin } from "antd";

import "./accordion.scss";
import dayjs from "dayjs";

const { Panel } = Collapse;

const accordionHeader = (data) => {
  return (
    <div className="row m-0">
      <div className="col-6 col-lg-5 col-sm-6 px-1 pb-2 pb-sm-2 pb-lg-0">
        <p className="f-14 f-w-500 txt-text-1 mb-0 mb-lg-1">{data.name}</p>
        <p className="f-12 f-w-400 txt-text-2">
          {data?.keyResults.length} key results
        </p>
      </div>
      <p className="col-6 col-lg-3 col-sm-6 px-1 pb-2 pb-sm-2 pb-lg-0 f-14 f-w-500 txt-text-1 mb-1 d-flex align-items-center">
        {dayjs(data.startDate).format('D MMM YYYY')} <span> - </span>
        {dayjs(data.endDate).format('D MMM YYYY')}
      </p>
      <p className="col-6 col-lg-2 col-sm-6 px-1 pb-2 pb-sm-2 pb-lg-0 f-14 f-w-500 txt-text-1 mb-1 d-flex align-items-center">{data.hierarchy}</p>
      <p className="col-6 col-lg-2 col-sm-6 px-1 pb-2 pb-sm-2 pb-lg-0 f-14 f-w-500 txt-text-1 mb-1 d-flex align-items-center">{data.objectiveType}</p>
    </div>
  );
};

const Accordion = ({ userList, loader }) => {
  return (
    <div className="px-lg-4 pb-lg-4 px-0 pb-0">
      <div className="row m-0 accordion-main-header">
        <p className="col-6 col-lg-5 col-sm-6 px-1 pb-2 pb-sm-2 pb-lg-0 f-14 f-w-700 txt-text-1">Objective</p>
        <p className="col-6 col-lg-3 col-sm-6 px-1 pb-2 pb-sm-2 pb-lg-0 f-14 f-w-700 txt-text-1">Start Date - End Date</p>
        <p className="col-6 col-lg-2 col-sm-6 px-1 pb-2 pb-sm-2 pb-lg-0 f-14 f-w-700 txt-text-1">Level of Hierarchy</p>
        <p className="col-6 col-lg-2 col-sm-6 px-1 pb-2 pb-sm-2 pb-lg-0 f-14 f-w-700 txt-text-1">Type of Objective</p>
      </div>
      {!loader ? (
        <Collapse accordion expandIconPosition="end">
          {userList?.length !== 0 ? userList?.map((data, index) => {
            return (
              <Panel header={accordionHeader(data)} key={index}>
                <div className="pl-3 accordion-table">
                  {data.keyResults.map((resultValue, index) => {
                    return (
                      <div className="result-section" key={index}>
                        <p className="py-1 px-3 key-header f-14 f-w-600 txt-text-1">
                          KEY RESULT {++index}
                        </p>
                        <div className="d-flex align-items-center w-100 row">
                          <div className="col-lg-3 pb-2 pb-sm-2 pb-lg-0">
                            <label className="f-12 f-w-500 l-h-normal txt-text-2">
                              Name
                            </label>
                            <p className="f-14 l-h-normal txt-text-1">
                              {resultValue.name}
                            </p>
                          </div>
                          <div className="d-flex align-items-center mb-2 col-lg-2 pb-2 pb-sm-2 pb-lg-0">
                            <div className="me-2">
                              <label className="f-12 f-w-500 l-h-normal txt-text-2">
                                StartingValue
                              </label>
                              <p className="f-14 l-h-normal txt-text-1">
                                {resultValue.startingValue
                                  ? resultValue.startingValue
                                  : "--"}
                              </p>
                            </div>
                            <div className="ms-2">
                              <label className="f-12 f-w-500 l-h-normal txt-text-2">
                                TargetValue
                              </label>
                              <p className="f-14 l-h-normal txt-text-1">
                                {resultValue.targetValue
                                  ? resultValue.targetValue
                                  : "--"}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-3 pb-2 pb-sm-2 pb-lg-0">
                            <label className="f-12 f-w-500 l-h-normal txt-text-2">
                              Progress Percentage
                            </label>
                            <Progress
                              percent={parseFloat(
                                resultValue.progressPercentage
                              )}
                            />
                          </div>
                          <div className="col-lg-1 pb-2 pb-sm-2 pb-lg-0">
                            <label className="f-12 f-w-500 l-h-normal txt-text-2">
                              Unit
                            </label>
                            <p className="f-14 l-h-normal txt-text-1">
                              {resultValue.uom ? resultValue.uom : "--"}
                            </p>
                          </div>
                          <div className="col-lg-3 pb-2 pb-sm-2 pb-lg-0">
                            <label className="f-12 f-w-500 l-h-normal txt-text-2">
                              Confidence Indicator
                            </label>
                            <Progress
                              className={`${parseFloat(resultValue.confidenceIndicator) <= 50 ? "below50" : `${parseFloat(resultValue.confidenceIndicator) <= 80 ? "below80": "above80"}`}`}
                              percent={parseFloat(
                                resultValue.confidenceIndicator
                              )} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  { data.keyResults.length === 0 && (
                    <div className="f-14 m-4 text-center">
                      No Key Result found
                    </div>
                  )}
                </div>
              </Panel>
            );
          }): 
            <div className="empty-list-page"><p className="f-20 f-w-bold">No data Found</p></div>
          }
        </Collapse>
      ) : (
        <div className="loader d-flex align-items-center justify-content-center">
          <Spin />
        </div>
      )}
    </div>
  );
}

export default Accordion;
