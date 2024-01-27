import React from "react";
import Player from "./Player";

const Score = () => {
  return (
    <div className="border-t border-b">
      <Player />
      <div className="flex flex-col justify-between capitalize p-5">
        <div className="flex justify-between bg-[#0B6623]/[0.5] p-2">
          <p>hole</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>out</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>in</p>
          <p>total</p>
        </div>
        <div className="flex justify-between p-2">
          <p>par</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>out</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>in</p>
          <p>total</p>
        </div>
        <div className="flex justify-between p-2">
          <p>yards</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>out</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>in</p>
          <p>total</p>
        </div>
        <div className="flex justify-between p-2">
          <p>round</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>out</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>in</p>
          <p>total</p>
        </div>
        <div className="flex items-center justify-center gap-4 p-2">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center w-5 h-5 border border-black rounded-full">
              <div className=" w-4 h-4 bg-black  rounded-full"></div>
            </div>
            <p>eagle or better</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-5 h-5 bg-black rounded-full"></div>
            <p>birdie</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-5 h-5 bg-black"></div>
            <p>bogey</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center w-5 h-5 border border-black">
              <div className=" w-4 h-4 bg-black"></div>
            </div>
            <p>double bogey or better</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
