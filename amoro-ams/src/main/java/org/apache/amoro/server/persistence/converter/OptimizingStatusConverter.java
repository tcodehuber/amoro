/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.amoro.server.persistence.converter;

import org.apache.amoro.server.optimizing.OptimizingStatus;
import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedJdbcTypes;
import org.apache.ibatis.type.MappedTypes;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedJdbcTypes(JdbcType.INTEGER)
@MappedTypes(Enum.class)
public class OptimizingStatusConverter extends BaseTypeHandler<OptimizingStatus> {

  @Override
  public void setNonNullParameter(
      PreparedStatement ps, int i, OptimizingStatus parameter, JdbcType jdbcType)
      throws SQLException {
    ps.setInt(i, parameter.getCode());
  }

  @Override
  public OptimizingStatus getNullableResult(ResultSet rs, String columnName) throws SQLException {
    String s = rs.getString(columnName);
    return s == null ? null : OptimizingStatus.ofCode(Integer.parseInt(s));
  }

  @Override
  public OptimizingStatus getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
    String s = rs.getString(columnIndex);
    return s == null ? null : OptimizingStatus.ofCode(Integer.parseInt(s));
  }

  @Override
  public OptimizingStatus getNullableResult(CallableStatement cs, int columnIndex)
      throws SQLException {
    String s = cs.getString(columnIndex);
    return s == null ? null : OptimizingStatus.ofCode(Integer.parseInt(s));
  }
}
