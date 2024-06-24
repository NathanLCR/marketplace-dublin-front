import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = (props: { password: string }) => {
  const testResult = zxcvbn(props.password);
  const num = testResult.score * 100/4;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return 'Very Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return 'Very Weak';
    }
  }

  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return 'bg-red-500';
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-yellow-500';
      case 3:
        return 'bg-blue-500';
      case 4:
        return 'bg-green-500';
      default:
        return 'bg-red-500';
    }
  }

  return (
    <div className="mt-2">
      <div className="h-2 bg-gray-300 rounded">
        <div
          className={`h-2 rounded ${progressColor()}`}
          style={{ width: `${num}%` }}
        />
      </div>
      <p className="text-gray-700">{createPassLabel()}</p>
    </div>
  );
};

export default PasswordStrengthMeter;
